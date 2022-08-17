import * as React from "react";
import { useSelector } from "react-redux";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";

export interface VideoContentProps {}

export default function VideoContent(props: VideoContentProps) {
  const { dataVideo } = useSelector((state: any) => state.music);
  console.log(
    "🚀 ~ file: VideoContent.tsx ~ line 10 ~ VideoContent ~ dataVideo",
    dataVideo
  );
  if (!dataVideo.video) return null;
  const { title, artists, dateCreate } = dataVideo?.video;
  return (
    <div>
      <MusicTitle className="text-[18px] text-text1 font-medium mb-2">
        {title}
      </MusicTitle>
      <MusicImageAuthor authorImage dataAuthor={artists}></MusicImageAuthor>
      <span className="music-dots mt-2 inline-block">
        <span className="pl-3">
          {new Date().toLocaleDateString("vi-VI") ||
            new Date(dateCreate * 1000).toLocaleDateString("vi-VI")}
        </span>
      </span>
    </div>
  );
}
