import * as React from "react";
import { useSelector } from "react-redux";

export interface VideoListProps {}

export default function VideoList(props: VideoListProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: VideoList.tsx ~ line 7 ~ VideoList ~ data", data);
  return <div>Video</div>;
}
