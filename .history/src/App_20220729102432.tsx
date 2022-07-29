import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MusicAsiaPage from "./pages/MusicAsiaPage";
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
      </Routes>
    </Suspense>
  );
}

export default App;
