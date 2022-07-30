import * as React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import MusicItem from "../MusicList/parts/MusicItem";

interface MusicPlayProps {
  dataPlay: any;
}

export default function MusicPlay({ dataPlay }: MusicPlayProps) {
  console.log(
    "🚀 ~ file: MusicPlay.tsx ~ line 10 ~ MusicPlay ~ dataPlay",
    dataPlay
  );
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataPlayOne = data?.songs?.top100_VN[0].songs[0];
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-700 py-4 px-5">
      <div>
        <MusicItem
          data={dataPlay === undefined ? dataPlayOne : dataPlay}
        ></MusicItem>
      </div>
      <div>
        <ReactPlayer
          className="react-player"
          // url={dataPlay.url}
          width="100%"
          height="100%"
        />
      </div>
      <div></div>
    </div>
  );
}
