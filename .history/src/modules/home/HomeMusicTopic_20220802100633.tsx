import * as React from "react";
import { useSelector } from "react-redux";
import { MusicItemType } from "../../utils/type";
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
            <MusciItem playNot data={item}></MusciItem>
          ))}
    </MusicTopic>
  );
}
