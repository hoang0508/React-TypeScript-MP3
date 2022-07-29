import * as React from "react";
import MusicItemProps from "../MusicList";
import MusicItem from "../MusicList/parts/MusicItem";

interface MusicPlayProps {
  dataPlay: any;
}

export default function MusicPlay({ dataPlay }: MusicPlayProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 py-6 px-5">
      <div>
        <MusicItem data={dataPlay}></MusicItem>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
