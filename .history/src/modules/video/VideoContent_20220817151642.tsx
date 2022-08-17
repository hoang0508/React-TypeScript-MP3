import * as React from "react";
import { useSelector } from "react-redux";

export interface VideoContentProps {}

export default function VideoContent(props: VideoContentProps) {
  const { dataVideo } = useSelector((state: any) => state.music);
  console.log(
    "🚀 ~ file: VideoPage.tsx ~ line 19 ~ VideoPage ~ dataVideo",
    dataVideo
  );
  return <div>video content</div>;
}
