import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconDots, IconVolume } from "../../../components/icon";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import { FetchDataSong, setIndexSong } from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";
import lodash from "lodash";
import "./PlayMusic.scss";
import usePlayMusicTimer from "../../../hooks/usePlayMusicTimer";
import { FetchMusicKey } from "./FetchMusicKey";
import PlayMusicAction from "./PlayMusicAction";
import PlayMusicAudio from "./PlayMusicAudio";
// export interface PlayMusicProps {}

export default function Playmusic() {
  // data music
  const data = useSelector((state) => state.music.dataMusic);

  //
  const keySong = useSelector((state) => state.music.musicSongKey);

  // key song config
  const keyMusic =
    keySong === undefined ? data?.song && data?.song[0].key : keySong;

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);

  // Data song music
  const dataSong = useSelector((state) => state.music.dataMusicSong);

  //
  // index Song
  const indexSong = useSelector((state) => state.music.indexSong);

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  // Custom hook usePlaymusic
  const { handleClickPlay, handleClickPause } = useMusicPlay();

  //data song length
  const dataSongLength = data?.song;

  // data music key
  const MusicKeyData =
    data?.song &&
    dataSongLength.map((item, index) => {
      return item.key;
    });

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

  // hooks timer play music
  const { durationTime, remainingTime, range, rangeInput, handleChangePlay } =
    usePlayMusicTimer(data);
  return (
    <div className="flex justify-between flex-col gap-y-[80px]">
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
        <div className="flex justify-between items-center">
          <IconVolume></IconVolume>
          <span>Danh sách phát</span>
          <IconDots></IconDots>
        </div>
        <PlayMusicAudio
          dataSong={dataSong}
          dataMusicKey={dataMusicKey}
          data={data}
        ></PlayMusicAudio>
        <PlayMusicAction
          handleClickNextMusic={handleClickNextMusic}
          handleClickPrevMusic={handleClickPrevMusic}
        ></PlayMusicAction>
      </div>
    </div>
  );
}
