import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import * as React from "react";

// hook usePlayTimer

const MusicContext = createContext(undefined);

const MusicProvider = (props: any) => {
  // data music song
  const dataSong = useSelector((state: any) => state.music.dataMusicSong);
  // data video
  const { dataVideo } = useSelector((state: any) => state.music);

  // check diều kiện video vs song
  const dataPlayer =
    dataVideo && dataVideo?.video ? dataVideo?.video : dataSong?.song;
  // ref mp3
  const refMp3 = React.useRef(null);

  // state true false play
  const [isPlayer, setIsPlayer] = React.useState({
    ...dataPlayer,
    isMyPlaylist: true,
  });

  // timer
  let timer: any;

  // state repeat
  const [repeatMusic, setRepeatMusic] = React.useState(false);

  // Volume music
  const [volume, setVolume] = React.useState(1);

  // let vol = refMp3.current?.volume;
  // handleClickPlay
  const handleClickPlay = () => {
    refMp3.current.play();
    setIsPlayer({ ...dataPlayer, isMyPlaylist: false });
  };

  // handleClickPause
  const handleClickPause = () => {
    refMp3.current.pause();
    setIsPlayer({ ...dataPlayer, isMyPlaylist: true });
    clearInterval(timer);
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
    setVolume,
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
