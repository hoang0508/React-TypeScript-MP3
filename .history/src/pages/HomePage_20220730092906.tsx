import * as React from "react";
import { useDispatch } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeBanner from "../modules/home/HomeBanner";
import MusicList from "../modules/music/MusicList";
import { Fetchdata } from "../redux/MusicSlice";

interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  return (
    <LayoutMusicPage>
      <HomeBanner></HomeBanner>
      <HeadingLine>Đừng bỏ lỡ</HeadingLine>
      <MusicList></MusicList>
    </LayoutMusicPage>
  );
}
