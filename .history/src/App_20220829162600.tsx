import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import DiscoverPage from "./pages/DiscoverPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const PlayListPage = lazy(() => import("./pages/PlayListPage"));

const {
  getHome,
  getSong,
  getPlaylists,
  getChart,
  getPlaylistDetail,
  getTrendingArtists,
  getLyric,
  getVideoDetail,
  searchByKeyword,
  getTopKeyword,
  //... and many other services
} = require("nhaccuatui-api-full");
function App() {
  // useEffect(() => {
  //   (async () => {
  //     const data = await getTopKeyword();
  //     console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
  //   })();
  // }, []);
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/timkiem" element={<SearchPage />}></Route>
        <Route path="/khampha" element={<DiscoverPage />}></Route>
        <Route path="/PlayList/:id" element={<PlayListPage />}></Route>
        <Route path="/VideoMusic/:id" element={<VideoPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
