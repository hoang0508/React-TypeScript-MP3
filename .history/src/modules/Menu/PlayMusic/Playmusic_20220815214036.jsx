import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import { FetchDataSong, setIndexSong } from "../../../redux/MusicSlice";
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

  //

  // key song  lấy ra key music khi click vào item song
  const keySong = useSelector((state) => state.music.musicSongKey);

  // key song config // check ddieuefd kiện key
  const keyMusic =
    keySong === undefined ? data?.song && data?.song[0].key : keySong;

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);

  // Data song music
  const dataSong = useSelector((state) => state.music.dataMusicSong);

  // Data Play list
  const { dataPlayList } = useSelector((state) => state.music);
  const { songs } = dataPlayList?.playlist;
  console.log("🚀 ~ file: Playmusic.jsx ~ line 39 ~ Playmusic ~ songs", songs);

  // index Song
  const indexSong = useSelector((state) => state.music.indexSong);

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  //  Context usePlaymusic
  const { handleClickPlay, handleClickPause, handleRepeatMusic, repeatMusic } =
    useMusicPlay();

  //data song length
  const dataSongLength = data?.song;

  // data music key
  const MusicKeyData = dataPlayList?.songs
    ? dataPlayList?.songs &&
      dataPlayList?.songs?.map((item, index) => {
        return item.key;
      })
    : data?.song &&
      dataSongLength.map((item, index) => {
        return item.key;
      });

  //
  console.log(MusicKeyData);

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

  // useState data music key => update src mp3
  const [dataMusicKey, setDataMusicKey] = React.useState();
  // useEffect src music mp3
  React.useEffect(() => {
    setDataMusicKey(dataSong?.song);
  }, [dataSong?.song]);

  // useEffect call data getSong key ,
  React.useEffect(() => {
    FetchMusicKey(MusicKeyData, indexSong).then((res) => setDataMusicKey(res));
  }, [indexSong]);

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
      if (indexSong >= dataSongLength.length) {
        setIndexSong(0);
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
        setIndexSong(dataSongLength.length - 1);
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
          data={indexSong > 0 ? dataMusicKey?.song : dataSong?.song}
          playNot
          author={authorSong}
        ></MusciItem>
      </div>
      <div>
        <PlayMusicVolume></PlayMusicVolume>
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
