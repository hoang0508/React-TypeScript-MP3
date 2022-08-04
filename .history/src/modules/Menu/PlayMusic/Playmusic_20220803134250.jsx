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

  console.log(keyMusic);

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);
  const dataSong = useSelector((state) => state.music.dataMusicSong);

  const configMusicItemMp3 = dataSong?.song?.streamUrls[0];

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art) => art.name).join(" , ");

  // Custom hook usePlaymusic
  const { handleClickPlay, refMp3, isPlayer } = useMusicPlay();
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
            src={configMusicItemMp3?.streamUrl}
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
                // onClick={() => handleClickPlay()}
                onClick={handleClickPlay}
              ></IconPlayingMusic>
            ) : (
              <IconPauseMusic
                className="w-12 h-12"
                onClick={handleClickPlay}
              ></IconPauseMusic>
            )}
          </div>
          <div>
            <IconNextMusic></IconNextMusic>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
