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
// export interface PlayMusicProps {}

export default function Playmusic() {
  // data music
  const data = useSelector((state) => state.music.dataMusic);

  const keySong = useSelector((state) => state.music.musicSongKey);

  // key song config
  const keyMusic =
    keySong === undefined ? data?.song && data?.song[0].key : keySong;

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);
  const dataSong = useSelector((state) => state.music.dataMusicSong);

  // Song index config
  const DataSongIndex = (index) => {
    return data?.song && data?.song[index];
  };

  //
  // // audio src mp3

  const [indexSong, setIndexSong] = React.useState(0);

  const h = {
    ...DataSongIndex(indexSong),
    streamUrls: dataSong?.song?.streamUrls[0],
  };

  const t = h?.streamUrls && h?.streamUrls?.streamUrl;
  console.log("🚀 ~ file: Playmusic.jsx ~ line 51 ~ Playmusic ~ t", t);
  const [configMusicItemMp3, setConfigMusicItemMp3] = React.useState(t);
  setConfigMusicItemMp3(1);
  console.log(configMusicItemMp3);

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  // Custom hook usePlaymusic
  const { handleClickPlay, refMp3, isPlayer, handleClickPause } =
    useMusicPlay();

  // Next Music play
  const handleClickNextMusic = () => {
    setIndexSong((indexSong) => indexSong + 1);
    // if (indexSong > 0) {
    //   setConfigMusicItemMp3({
    //     ...DataSongIndex(indexSong),
    //     streamUrls: dataSong?.song?.streamUrls[0],
    //   });
    // }
    handleClickPlay();
    // handleClickPause();
  };
  return (
    <div className="flex justify-between flex-col gap-y-[80px]">
      <div className="bg-bgColor2 py-3 px-4">
        <MusciItem
          classNames="h-[240px] w-[240px]"
          heading="abc"
          data={dataSong?.song}
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
          <audio
            muted={false}
            src={configMusicItemMp3?.streamUrls?.streamUrl}
            ref={refMp3}
          ></audio>
          <div className="flex justify-between items-center mt-2 text-xs">
            <span>0:00</span>
            <span>5:00</span>
          </div>
        </div>
        <div className="mt-5 flex justify-between items-center">
          <div></div>
          <div>
            <IconPrevMusic></IconPrevMusic>
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
              onClick={() => handleClickNextMusic()}
            ></IconNextMusic>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
