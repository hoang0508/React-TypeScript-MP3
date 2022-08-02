import * as React from "react";
import { useSelector } from "react-redux";

export interface MusicTopicProps {}

export default function MusicTopic(props: MusicTopicProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: MusicSong.tsx ~ line 11 ~ MusicSong ~ data", data);
  return <div>Music topic</div>;
}
