import * as React from "react";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeMusic from "../modules/home/HomeMusic";
import MusicList from "../modules/MusicList/MusicList";

interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const h = "top100_VN";
  return (
    <LayoutMusicPage>
      <HomeMusic list={h}>
        <MusicList></MusicList>
      </HomeMusic>
    </LayoutMusicPage>
  );
}
