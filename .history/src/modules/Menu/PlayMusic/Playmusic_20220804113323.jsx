import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconDots,
  IconPlayingMusic,
  IconVolume,
} from "../../../components/icon";
import IconNextMusic from "../../../components/icon/IconNextMusic";
import IconPauseMusic from "../../../components/icon/IconPauseMusic";
import IconPrevMusic from "../../../components/icon/IconPrevMusic";
import { useMusicPlay } from "../../../contexts/ContextProviderMusic";
import usePlayMusic from "../../../hooks/usePlayMusic";
import { FetchDataSong } from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";
import "./PlayMusic.scss";
const {
  getSong,
  //... and many other services
} = require("nhaccuatui-api-full");
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
  console.log(
    "🚀 ~ file: Playmusic.jsx ~ line 41 ~ Playmusic ~ dataSong",
    dataSong
  );

  //
  // index Song
  let [indexSong, setIndexSong] = React.useState(0);
  console.log(
    "🚀 ~ file: Playmusic.jsx ~ line 45 ~ Playmusic ~ indexSong",
    indexSong
  );

  // src music mp3
  const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState("");
  console.log(
    "🚀 ~ file: Playmusic.jsx ~ line 52 ~ Playmusic ~ configMusicItemMp3",
    configMusicItemMp3
  );

  // useEffect src music mp3
  React.useEffect(() => {
    setConfigMusicItemMp3(dataSong?.song);
  }, [dataSong?.song]);

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  // Custom hook usePlaymusic
  const { handleClickPlay, refMp3, isPlayer, handleClickPause } =
    useMusicPlay();

  const dataSongLength = data?.song;

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

  // useEffect call data getSong key ,
  React.useEffect(() => {
    const FetchMusicKey = async () => {
      if (!MusicKeyData) return null;
      const res = await getSong(MusicKeyData[indexSong]);
      setDataMusicKey(res);
    };
    FetchMusicKey();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexSong]);

  // Next Music play
  const handleClickNextMusic = () => {
    changeSong(1);
  };

  const handleClickPrevMusic = () => {
    changeSong(-1);
  };

  // change Song Music next , prev
  function changeSong(dir) {
    if (dir === 1) {
      setIndexSong(indexSong + 1);
      if (indexSong >= dataSongLength.length) {
        setIndexSong(0);
      }
      setConfigMusicItemMp3(dataMusicKey?.song);
      handleClickPlay();
      // setTimeout(() => {
      // }, 500);
    } else if (dir === -1) {
      setIndexSong(indexSong - 1);
      if (indexSong <= 0) {
        setIndexSong(dataSongLength.length - 1);
      }
      setConfigMusicItemMp3(dataMusicKey?.song);
      setTimeout(() => {
        handleClickPlay();
      }, 500);
    }
  }

  console.log(
    "🚀 ~ file: Playmusic.jsx ~ line 100 ~ Playmusic ~ dataMusicKey",
    dataMusicKey
  );

  if (configMusicItemMp3 === undefined) return null;

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
        <div className="mt-4">
          <input type="range" name="range" id="range" className="range" />
          {configMusicItemMp3 && configMusicItemMp3?.streamUrls && (
            <audio
              muted={false}
              src={configMusicItemMp3?.streamUrls[0]?.streamUrl}
              ref={refMp3}
            ></audio>
          )}
          <div className="flex justify-between items-center mt-2 text-xs">
            <span>0:00</span>
            <span>5:00</span>
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div></div>
          <div>
            <IconPrevMusic
              onClick={() => handleClickPrevMusic()}
            ></IconPrevMusic>
          </div>
          <div>
            {isPlayer?.isMyPlaylist ? (
              <IconPlayingMusic
                className="w-12 h-12"
                onClick={handleClickPlay}
              ></IconPlayingMusic>
            ) : (
              <IconPauseMusic
                className="w-12 h-12"
                onClick={handleClickPause}
              ></IconPauseMusic>
            )}
          </div>
          <div>
            <IconNextMusic
              onClick={() => handleClickNextMusic(1)}
            ></IconNextMusic>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
