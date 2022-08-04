import * as React from "react";
import { useSelector } from "react-redux";

export interface usePlayMusicProps {}

export default function usePlayMusic(props: usePlayMusicProps) {
  const dataSong = useSelector((state: any) => state.music.dataMusicSong);
  // ref mp3
  const refMp3 = React.useRef(null);

  // state true false play
  const [isPlayer, setIsPlayer] = React.useState({
    ...dataSong?.song,
    isMyPlaylist: true,
  });

  //
  const handleClickPlay = () => {
    if (isPlayer?.isMyPlaylist) {
      refMp3.current.play();
      setIsPlayer({ ...dataSong?.song, isMyPlaylist: false });
    } else {
      refMp3.current.pause();
      setIsPlayer({ ...dataSong?.song, isMyPlaylist: true });
    }
  };
  return {
    refMp3,
    handleClickPlay,
    isPlayer,
  };
}
