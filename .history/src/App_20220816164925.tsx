import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MusicProvider } from "./contexts/ContextProviderMusic";
import PlayListPage from "./pages/PlayListPage";
import VideoPage from "./pages/VideoPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const {
  getHome,
  getSong,
  getPlaylists,
  getChart,
  getPlaylistDetail,
  getTrendingArtists,
  getLyric,
  getVideoDetail,
  //... and many other services
} = require("nhaccuatui-api-full");
function App() {
  useEffect(() => {
    (async () => {
      const data = await getLyric("IXTbg1bBelQKh");
      console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
    })();
  }, []);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/PlayList/:id" element={<PlayListPage />}></Route>
        <Route path="/VideoMusic/:id" element={<VideoPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;