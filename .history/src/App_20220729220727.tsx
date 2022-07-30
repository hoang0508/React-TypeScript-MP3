import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import MusicAsiaPage from "./pages/MusicAsiaPage";
import { Fetchdata } from "./redux/MusicSlice";
const HomePage = lazy(() => import("./pages/HomePage"));
const {
  getHome,
  getSong,
  getPlaylists,
  //... and many other services
} = require("nhaccuatui-api-full");

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  getHome().then((data: any) => console.log(data));
  (async () => {
    const data = await getHome();
    console.log("🚀 ~ file: App.tsx ~ line 22 ~ data", data);
  })();
  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/music-chaua" element={<MusicAsiaPage />}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
