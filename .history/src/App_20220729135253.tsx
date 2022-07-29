import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MusicVietTre from "./modules/music/musicViet/MusicVietTre";
import MusicVietTruTinh from "./modules/music/musicViet/MusicVietTruTinh";
import MusicAsiaPage from "./pages/MusicAsiaPage";
import { Fetchdata } from "./redux/MusicSlice";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/music-chaua" element={<MusicAsiaPage />}></Route>
        <Route path={`/:tru-tinh`} element={<MusicVietTruTinh />}></Route>
        {/* <Route path="/nhac-tre" element={<HomePage />}></Route> */}
      </Routes>
    </Suspense>
  );
}

export default App;
