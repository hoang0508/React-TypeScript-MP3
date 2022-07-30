import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Fetchdata } from "./redux/MusicSlice";
const HomePage = lazy(() => import("./pages/HomePage"));
const {
  getHome,
  getSong,
  getPlaylists,
  //... and many other services
} = require("nhaccuatui-api-full");

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await getHome();
      console.log(
        "🚀 ~ file: App.tsx ~ line 17 ~ fetchData ~ reponse",
        reponse
      );
    };
    fetchData();
  });
  // getHome().then((data: any) => console.log(data));
  // (async () => {
  //   const data = await getHome();
  //   console.log("🚀 ~ file: App.tsx ~ line 22 ~ data", data);
  // })();
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
