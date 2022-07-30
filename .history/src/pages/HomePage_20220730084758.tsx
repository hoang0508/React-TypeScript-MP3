import * as React from "react";
import { useDispatch } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import { Fetchdata } from "../redux/MusicSlice";

interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  return <LayoutMusicPage>Music</LayoutMusicPage>;
}
