import * as React from "react";
import { useSelector } from "react-redux";
import MusicTopic from "../music/MusicTopic";

export interface HomeMusicTopicProps {}

export default function HomeMusicTopic(props: HomeMusicTopicProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataTopic = data?.topic;
  console.log(
    "🚀 ~ file: MusicTopic.tsx ~ line 10 ~ MusicTopic ~ dataTopic",
    dataTopic
  );
  return <MusicTopic>Music topic</MusicTopic>;
}
