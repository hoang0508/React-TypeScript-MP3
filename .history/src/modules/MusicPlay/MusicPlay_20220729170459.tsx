import * as React from "react";
import { useSelector } from "react-redux";
import MusicItemProps from "../MusicList";
import MusicItem from "../MusicList/parts/MusicItem";

interface MusicPlayProps {
  dataPlay: any;
}

export default function MusicPlay({ dataPlay }: MusicPlayProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataPlayOne = data?.songs?.top100_VN[0].songs[0];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 py-6 px-5">
      <div>
        <MusicItem data={dataPlay ? dataPlay : dataPlayOne}></MusicItem>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
