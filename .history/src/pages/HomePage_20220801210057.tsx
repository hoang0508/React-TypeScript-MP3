import * as React from "react";
import { useDispatch } from "react-redux";
import Gap from "../components/common/Gap";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeBanner from "../modules/home/HomeBanner";
import HomeMusicNew from "../modules/home/HomeMusicNew";
import MusicListFeed from "../modules/music/MusicListFeed";
import MusicNCT from "../modules/music/MusicNCT";
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
      <MusicListFeed heading="miss"></MusicListFeed>
      <Gap />
      <MusicListFeed heading="select"></MusicListFeed>
      <Gap />
      <MusicListFeed heading="fire"></MusicListFeed>
      <Gap />
      <HeadingLine>Mới phát hành</HeadingLine>
      <HomeMusicNew></HomeMusicNew>
      <Gap />
      <HeadingLine>NCT Realtime</HeadingLine>
      <MusicNCT></MusicNCT>
      <Gap />
      <HeadingLine>Video hot</HeadingLine>
    </LayoutMusicPage>
  );
}
