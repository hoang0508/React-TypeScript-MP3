import * as React from "react";
import { useDispatch } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeBanner from "../modules/home/HomeBanner";
import MusicListFeed from "../modules/music/MusicListFeed";
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
      <MusicListFeed heading="miss"></MusicListFeed>
      <HeadingLine>Lựa Chọn Cuối Tuần</HeadingLine>
      <MusicListFeed heading="select"></MusicListFeed>
    </LayoutMusicPage>
  );
}
