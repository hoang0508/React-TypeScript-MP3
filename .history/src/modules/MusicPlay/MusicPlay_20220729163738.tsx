import * as React from "react";
import MusicItem from "../MusicList/parts/MusicItem";

interface MusicPlayProps {}

export default function MusicPlay(props: MusicPlayProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 py-6 px-5">
      <div>{/* <MusicItem ></MusicItem> */}</div>
      <div></div>
      <div></div>
    </div>
  );
}
