import React, { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Fetchdata } from "./redux/MusicSlice";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: App.tsx ~ line 13 ~ App ~ data", data);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
