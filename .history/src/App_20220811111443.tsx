import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MusicProvider } from "./contexts/ContextProviderMusic";
import PlayListPage from "./pages/PlayListPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const {
  getHome,
  getSong,
  getPlaylists,
  getChart,
  getPlaylistDetail,
  //... and many other services
} = require("nhaccuatui-api-full");
function App() {
  // useEffect(() => {
  //   (async () => {
  //     const data = await getHome();
  //     console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
  //   })();
  // }, []);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/PlayList/:id" element={<PlayListPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
