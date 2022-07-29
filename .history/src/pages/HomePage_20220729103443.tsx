import * as React from "react";
import { useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeMusic from "../modules/home/HomeMusic";
import MusicList from "../modules/MusicList/MusicList";

interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  const h = "top100_VN";
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataList = data?.songs?.top100_VN[0]?.songs;
  console.log(
    "🚀 ~ file: HomePage.tsx ~ line 13 ~ HomePage ~ dataList",
    dataList
  );
  return (
    <LayoutMusicPage>
      <HomeMusic list={h}>
        <MusicList dataList={dataList}></MusicList>
      </HomeMusic>
    </LayoutMusicPage>
  );
}
