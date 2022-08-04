import { createContext } from "react";

const MusicContext = createContext(undefined);

const MusicProvider = (props: any) => {
  const value = {};
  return (
    <MusicContext.Provider value={value} {...props}></MusicContext.Provider>
  );
};
