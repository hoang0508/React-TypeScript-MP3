import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./pages/HomePage"));
const {
  getHome,
  getSong,
  getPlaylists,
  getChart,
  //... and many other services
} = require("nhaccuatui-api-full");
function App() {
  useEffect(() => {
    (async () => {
      const data = await getChart({
        category: "nhac-viet",
        time: {
          week: 48,
          year: 2021,
        },
      });
      console.log(data);
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
