import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { LocalSrogateProvider } from "./contexts/ContextLocalStroage";
import RealTimeRankingPage from "./pages/RealTimeRankingPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const PlayListPage = lazy(() => import("./pages/PlayListPage"));
const DiscoverArtistPage = lazy(() => import("./pages/DiscoverArtistPage"));
const DiscoverSongPage = lazy(() => import("./pages/DiscoverSongPage"));
const TopicPage = lazy(() => import("./pages/TopicPage"));
const TableRankingPage = lazy(() => import("./pages/TableRankingPage"));
const LyricPage = lazy(() => import("./pages/LyricPage"));

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
  //     const data1 = await getLyric("NfdN7JPPXVgi");
  //     const data2 = await getHome();
  //     console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data1);
  //     console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data2);
  //   })();
  // }, []);
  return (
    <Suspense
      fallback={
        <>
          <div className="bounce-loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/timkiem"
          element={
            <LocalSrogateProvider>
              <SearchPage />
            </LocalSrogateProvider>
          }
        ></Route>
        <Route path="/nghe-si" element={<DiscoverArtistPage />}></Route>
        <Route path="/discover-song" element={<DiscoverSongPage />}></Route>
        <Route path="/PlayList/:id" element={<PlayListPage />}></Route>
        <Route path="/VideoMusic/:id" element={<VideoPage />}></Route>
        <Route path="/Topic/:id" element={<TopicPage />}></Route>
        <Route path="/Lyric/:id" element={<LyricPage />}></Route>
        <Route path="/table-ranking" element={<TableRankingPage />}></Route>
        <Route path="/realtime" element={<RealTimeRankingPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
