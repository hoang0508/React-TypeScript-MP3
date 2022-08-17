import * as React from "react";
import { useSelector } from "react-redux";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";

export interface VideoContentProps {}

export default function VideoContent(props: VideoContentProps) {
  const { dataVideo } = useSelector((state: any) => state.music);
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 19 ~ VideoPage ~ dataVideo",
    dataVideo
  );
  if (!dataVideo) return null;
  const { title, artists } = dataVideo?.video;
  return (
    <div>
      <MusicTitle className="text-[18px] text-text1 font-medium mb-2">
        {title}
      </MusicTitle>
      <MusicImageAuthor authorImage dataAuthor={artists}></MusicImageAuthor>
    </div>
  );
}
