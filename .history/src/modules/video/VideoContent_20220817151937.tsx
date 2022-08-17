import * as React from "react";
import { useSelector } from "react-redux";
import MusicTitle from "../music/parts/MusicTitle";

export interface VideoContentProps {}

export default function VideoContent(props: VideoContentProps) {
  const { dataVideo } = useSelector((state: any) => state.music);
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 19 ~ VideoPage ~ dataVideo",
    dataVideo
  );
  if (!dataVideo) return null;
  const { title } = dataVideo?.video;
  return (
    <div>
      <MusicTitle className="text-xl">{title}</MusicTitle>
    </div>
  );
}
