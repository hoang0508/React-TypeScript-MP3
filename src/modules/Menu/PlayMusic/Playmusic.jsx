import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import {
  FetchDataSong,
  setDataMusicKey,
  setIndexSong,
} from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";
import lodash from "lodash";
import "./PlayMusic.scss";
import { FetchMusicKey } from "./FetchMusicKey";
import PlayMusicAction from "./PlayMusicAction";
import PlayMusicAudio from "./PlayMusicAudio";
import PlayMusicVolume from "./PlayMusicVolume";
// export interface PlayMusicProps {}

export default function Playmusic() {
  // data music
  const data = useSelector((state) => state.music.dataMusic);
  const dataSong1 = data?.song;
  // Data Play list
  const { dataPlayList } = useSelector((state) => state.music);
  const dataPlayListSongs = dataPlayList?.playlist?.songs;

  // ranking data
  const { dataTableRank } = useSelector((state) => state.ranking);
  const dataTableRankSong = dataTableRank?.ranking?.song;

  // render khi hiển thị lần đầu nếu key là undefine
  let checkKey;
  if (dataPlayListSongs) {
    checkKey = dataPlayListSongs[0]?.key;
  } else if (dataSong1) {
    checkKey = data?.song && data?.song[0].key;
  } else if (dataTableRankSong) {
    checkKey =
      dataTableRankSong &&
      dataTableRankSong.length > 0 &&
      dataTableRankSong[0]?.songKey;
  }

  // key song  lấy ra key music khi click vào item song
  const keySong = useSelector((state) => state.music.musicSongKey);

  // key song config // check ddieuefd kiện key
  const keyMusic = keySong === undefined ? checkKey : keySong;

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);

  // Data song music
  const dataSong = useSelector((state) => state.music.dataMusicSong);

  // index Song
  const indexSong = useSelector((state) => state.music.indexSong);

  // music DataMusicKey
  const { dataMusicKey } = useSelector((state) => state.music);

  //author song
  const authorSong =
    indexSong > 1
      ? dataMusicKey?.song?.artists &&
        dataMusicKey?.song?.artists.map((art) => art.name).join(" , ")
      : dataSong?.song?.artists &&
        dataSong?.song?.artists.map((art) => art.name).join(" , ");

  //  Context usePlaymusic
  const { handleClickPlay, handleClickPause, handleRepeatMusic, repeatMusic } =
    useMusicPlay();

  //data song length
  let dataSongLength;
  if (dataPlayListSongs) {
    dataSongLength = dataPlayListSongs;
  } else if (dataSong1) {
    dataSongLength = dataSong1;
  } else if (dataTableRankSong) {
    dataSongLength = dataTableRankSong;
  }

  // data music key , check diều kiện để lấy ra key bài hát , (nếu chưa có dataPlayListSong thì lấy key data)

  let MusicKeyData;
  if (dataPlayListSongs) {
    MusicKeyData =
      dataPlayListSongs &&
      dataPlayListSongs.length > 0 &&
      dataPlayListSongs.map((item, index) => {
        return item.key;
      });
  } else if (dataSong1) {
    MusicKeyData = dataSong1 && dataSong1?.length > 0;
    dataSong1.map((item, index) => {
      return item?.key;
    });
  } else if (dataTableRank) {
    MusicKeyData =
      dataTableRankSong &&
      dataTableRankSong.length > 0 &&
      dataTableRankSong.map((item) => {
        return item?.songKey;
      });
  }

  // Clean up useEffect
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    //
    isMounted.current = true;
    //cleanup
    return () => {
      // mounted
      isMounted.current = false;
    };
  }, []);

  // useEffect src music mp3
  React.useEffect(() => {
    dispatch(setDataMusicKey(dataSong?.song));
  }, [dataSong?.song, dispatch]);

  // useEffect call data getSong key ,
  React.useEffect(() => {
    FetchMusicKey(MusicKeyData, indexSong).then((res) => {
      dispatch(setDataMusicKey(res));
    });
  }, [indexSong, dispatch]);

  // Next Music play
  const handleClickNextMusic = () => {
    changeSong(1);
  };

  // Prev Music Play
  const handleClickPrevMusic = () => {
    changeSong(-1);
  };

  // change Song Music next , prev
  function changeSong(dir) {
    if (dir === 1) {
      dispatch(setIndexSong(indexSong + 1));
      if (indexSong >= dataSongLength?.length) {
        dispatch(setIndexSong(0));
      }
      handleClickPause();
      setTimeout(
        lodash.debounce(() => {
          handleClickPlay();
        }, 500)
      );
    } else if (dir === -1) {
      dispatch(setIndexSong(indexSong - 1));
      if (indexSong <= 0) {
        dispatch(setIndexSong(dataSongLength.length - 1));
      }
      handleClickPause();
      setTimeout(
        lodash.debounce(() => {
          handleClickPlay();
        }, 500)
      );
    }
  }

  // handle Ended ==  the end music ->> next music
  const handleEndedChange = () => {
    if (repeatMusic) {
      handleClickPause();
      setTimeout(
        lodash.debounce(() => {
          handleClickPlay();
        }, 500)
      );
    } else {
      changeSong(1);
    }
  };

  return (
    <div className="flex justify-between flex-col gap-y-[100px]">
      <div className="bg-bgColor2 py-3 px-4">
        <MusciItem
          classNames="h-[240px] w-[240px]"
          heading="abc"
          data={indexSong > 0 ? dataMusicKey : dataSong?.song}
          playNot
          author={authorSong}
        ></MusciItem>
      </div>
      <div>
        <PlayMusicVolume data={dataMusicKey}></PlayMusicVolume>
        <PlayMusicAudio
          dataSong={dataSong}
          dataMusicKey={dataMusicKey}
          data={data}
          handleEndedChange={handleEndedChange}
        ></PlayMusicAudio>
        <PlayMusicAction
          handleClickNextMusic={handleClickNextMusic}
          handleClickPrevMusic={handleClickPrevMusic}
          handleRepeatMusic={handleRepeatMusic}
        ></PlayMusicAction>
      </div>
    </div>
  );
}
