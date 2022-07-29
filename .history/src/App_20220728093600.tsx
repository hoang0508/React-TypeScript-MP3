import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { MusicApi } from "./apis/MusicApi";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: "IwAR0GHag3gFhli03N_svZiB3DHKkrgxCaK8h6hcIlN1iw-8ySgcmfoR4KUUA",
      });
      console.log(response.data);
    };
    fetchData();
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
