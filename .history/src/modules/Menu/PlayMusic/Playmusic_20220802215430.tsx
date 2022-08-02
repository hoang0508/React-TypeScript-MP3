import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconDots, IconVolume } from "../../../components/icon";
import { FetchDataSong } from "../../../redux/MusicSlice";
import MusciItem from "../../music/MusicItem";
import "./PlayMusic.scss";
export interface PlayMusicProps {}

export default function Playmusic(props: PlayMusicProps) {
  // data music
  const data = useSelector((state: any) => state.music.dataMusic);

  const keySong = useSelector((state: any) => state.music.musicSongKey);

  // key song config
  const keyMusic =
    keySong === undefined ? data?.song && data?.song[0].key : keySong;

  // dispatch call data music song
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchDataSong(keyMusic));
  }, [dispatch, keyMusic]);
  const dataSong = useSelector((state: any) => state.music.dataMusicSong);

  const configMusicItemMp3 = dataSong?.song?.streamUrls[0];

  //author song
  const authorSong =
    dataSong?.song?.artists &&
    dataSong?.song?.artists.map((art: any) => art.name).join(" , ");

  //   React.useEffect(() => {

  // }, [])

  // const refMp3 = React.useRef<HTMLDivElement>(null);

  const refMp3 = document.getElementById("music-mp3");

  const handleClickPlay = () => {
    refMp3.onplay(configMusicItemMp3?.streamUrl);
  };
  return (
    <div className="flex justify-between flex-col gap-y-[100px]">
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
          <audio src={configMusicItemMp3?.streamUrl} id="music-mp3"></audio>
          <div className="flex justify-between items-center mt-2 text-xs">
            <span>0:00</span>
            <span>5:00</span>
          </div>
        </div>
        <button onClick={() => handleClickPlay()}>Play</button>
      </div>
    </div>
  );
}
