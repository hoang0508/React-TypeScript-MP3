import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../music";
import MusciItem from "../music/MusicItem";
import MusicTopic from "../music/MusicTopic";

export interface HomeMusicTopicProps {}

export default function HomeMusicTopic(props: HomeMusicTopicProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataTopic = data?.topic;
  return (
    <MusicTopic>
      {dataTopic &&
        dataTopic.length > 0 &&
        dataTopic
          .slice(0, 4)
          .map((item: MusicItemType) => (
            <MusciItem key={v4()} playNot data={item}></MusciItem>
          ))}
    </MusicTopic>
  );
}
