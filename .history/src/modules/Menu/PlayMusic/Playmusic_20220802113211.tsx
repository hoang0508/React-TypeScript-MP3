import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../../music/MusicItem";

export interface PlayMusicProps {}

export default function Playmusic(props: PlayMusicProps) {
  const data = useSelector((state: any) => state.music.dataMusicPlay);
  console.log("🚀 ~ file: Playmusic.tsx ~ line 8 ~ PlayMusic ~ data", data);

  return (
    <div>
      <div className="bg-bgColor2 py-3 px-4">
        <MusciItem
          classNames="h-[240px] w-[240px]"
          heading="abc"
          data={data}
        ></MusciItem>
      </div>
    </div>
  );
}
