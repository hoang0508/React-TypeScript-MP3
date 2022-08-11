import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MusicProvider } from "./contexts/ContextProviderMusic";
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
  useEffect(() => {
    (async () => {
      const data = await getPlaylistDetail("5Cgvim9fU9YQ");
      console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
    })();
  }, []);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
