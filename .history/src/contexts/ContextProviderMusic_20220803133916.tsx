import { createContext, useContext } from "react";

const MusicContext = createContext(undefined);

const MusicProvider = (props: any) => {
  const value = {};
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
