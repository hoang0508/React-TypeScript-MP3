import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import * as React from "react";
import usePlayMusicTimer from "../hooks/usePlayMusicTimer";

// hook usePlayTimer

const MusicContext = createContext(undefined);

const MusicProvider = (props: any) => {
  const { timer } = usePlayMusicTimer();
  const dataSong = useSelector((state: any) => state.music.dataMusicSong);
  // ref mp3
  const refMp3 = React.useRef(null);

  // state true false play
  const [isPlayer, setIsPlayer] = React.useState({
    ...dataSong?.song,
    isMyPlaylist: true,
  });

  // handleClickPlay
  const handleClickPlay = () => {
    refMp3.current.play();
    setIsPlayer({ ...dataSong?.song, isMyPlaylist: false });
  };

  // handleClickPause
  const handleClickPause = () => {
    refMp3.current.pause();
    setIsPlayer({ ...dataSong?.song, isMyPlaylist: true });
    clearInterval(timer);
  };
  const value = {
    handleClickPlay,
    isPlayer,
    refMp3,
    handleClickPause,
  };
  return (
    <MusicContext.Provider value={value} {...props}></MusicContext.Provider>
  );
};

function useMusicPlay() {
  const context = useContext(MusicContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a AuthProvider");
  return context;
}

export { useMusicPlay, MusicProvider };
