import * as React from "react";
import { useSelector } from "react-redux";
import { LayoutMusicPage } from "../../../layout/LayoutMusicPage";
import HomeMusic from "../../home/HomeMusic";
import MusicList from "../../MusicList/MusicList";

export interface MusicVietTreProps {}

export default function MusicVietTre(props: MusicVietTreProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataList = data?.songs?.top100_VN[0]?.songs;
  return (
    <LayoutMusicPage>
      <HomeMusic text="top100_VN">
        <MusicList dataList={dataList}></MusicList>
      </HomeMusic>
    </LayoutMusicPage>
  );
}
