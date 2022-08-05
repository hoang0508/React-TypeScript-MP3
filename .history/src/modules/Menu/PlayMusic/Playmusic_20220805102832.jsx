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
import { FetchDataSong, setIndexSong } from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";
import lodash from "lodash";
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

  //
  // index Song
  const indexSong = useSelector((state) => state.music.indexSong);

  // src music mp3
  const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState("");

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  // Custom hook usePlaymusic
  const { handleClickPlay, refMp3, isPlayer, handleClickPause } =
    useMusicPlay();

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
    setConfigMusicItemMp3(dataSong?.song);
    setDataMusicKey(dataSong?.song);
  }, [dataSong?.song]);

  // useEffect call data getSong key ,
  React.useEffect(() => {
    const FetchMusicKey = async () => {
      if (!MusicKeyData) return null;
      const res = await getSong(MusicKeyData[indexSong]);
      console.log(
        "🚀 ~ file: Playmusic.jsx ~ line 96 ~ FetchMusicKey ~ res",
        res
      );
      setDataMusicKey(res);
    };
    FetchMusicKey();
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
      setTimeout(() => {
        handleClickPlay();
      }, 500);
    }
  }

  // timer
  const [durationTime, setDurationTime] = React.useState();
  const [remainingTime, setRemainingTime] = React.useState();
  const range = React.useRef(null);

  React.useEffect(() => {
    function disPlayTimer() {
      range.current.max = refMp3.current?.duration;
      range.current.min = refMp3.current?.currentTime;
      if (remainingTime === undefined && durationTime === undefined) {
        setRemainingTime("0:00");
        setDurationTime(data?.song?.duration);
      } else {
        setDurationTime(fomatTimer(refMp3.current?.duration));
        setRemainingTime(fomatTimer(refMp3.current?.currentTime));
      }
    }
    disPlayTimer();
    const timer = setInterval(disPlayTimer, 500);
    return () => {
      clearInterval(timer);
    };
  }, [data?.song?.duration, durationTime, refMp3, remainingTime]);

  const fomatTimer = (number) => {
    const minute = Math.floor(number / 60);
    const second = Math.floor(number - minute * 60);
    return `${minute}:${second}`;
  };

  const [rangeInput, setRangeInput] = React.useState(0);
  const handleChangePlay = () => {
    setRangeInput(refMp3.current?.currentTime);
  };
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
          <input
            type="range"
            name="range"
            value={rangeInput}
            ref={range}
            className="range"
            onChange={() => handleChangePlay()}
          />

          {configMusicItemMp3 && configMusicItemMp3?.streamUrls && (
            <audio
              muted={false}
              src={
                indexSong >= 1
                  ? dataMusicKey?.song?.streamUrls[0].streamUrl
                  : configMusicItemMp3?.streamUrls[0]?.streamUrl
              }
              ref={refMp3}
            ></audio>
          )}
          <div className="flex justify-between items-center mt-2 text-xs">
            <span>{remainingTime}</span>
            <span>{durationTime}</span>
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
