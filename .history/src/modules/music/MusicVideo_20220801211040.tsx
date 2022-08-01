import * as React from "react";
import { useSelector } from "react-redux";

export interface MusicVideoProps {}

export default function MusicVideo(props: MusicVideoProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  // console.log("🚀 ~ file: MusicVideo.tsx ~ line 8 ~ MusicVideo ~ data", data);
  const dataVideo = data?.video;
  console.log(
    "🚀 ~ file: MusicVideo.tsx ~ line 10 ~ MusicVideo ~ dataVideo",
    dataVideo
  );
  return (
    <div>
      <div className="flex gap-x-[18px] items-center">
        <div className="flex-1">Music video</div>
        <div className="flex-1">music video</div>
      </div>
      <div className="grid grid-cols-4 items-center"></div>
    </div>
  );
}
