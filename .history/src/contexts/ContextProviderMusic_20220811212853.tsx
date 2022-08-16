import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import * as React from "react";

// hook usePlayTimer

const MusicContext = createContext(undefined);

const MusicProvider = (props: any) => {
  const dataSong = useSelector((state: any) => state.music.dataMusicSong);
  // ref mp3
  const refMp3 = React.useRef(null);

  // state true false play
  const [isPlayer, setIsPlayer] = React.useState({
    ...dataSong?.song,
    isMyPlaylist: true,
  });

  // timer
  let timer: any;

  // state repeat
  const [repeatMusic, setRepeatMusic] = React.useState(false);

  // Volume music
  const [volume, setVolume] = React.useState(1);

  // handleClickPlay
  const handleClickPlay = () => {
    refMp3.current.play();
    setIsPlayer({ ...dataSong?.song, isMyPlaylist: false });
    setVolume(refMp3.current?.volume);
  };

  // handleClickPause
  const handleClickPause = () => {
    refMp3.current.pause();
    setIsPlayer({ ...dataSong?.song, isMyPlaylist: true });
    clearInterval(timer);
    setVolume(0);
  };

  // handle repeat
  const handleRepeatMusic = () => {
    setRepeatMusic(!repeatMusic);
  };
  const value = {
    handleClickPlay,
    isPlayer,
    refMp3,
    handleClickPause,
    timer,
    handleRepeatMusic,
    repeatMusic,
    volume,
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