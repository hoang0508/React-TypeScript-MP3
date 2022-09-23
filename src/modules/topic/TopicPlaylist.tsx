import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import HeadingLine from "../../components/common/Headingline";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";

export interface ITopicPlaylistProps {}

export default function TopicPlaylist(props: ITopicPlaylistProps) {
  const { dataTopic } = useSelector((state: any) => state.music);
  if (!dataTopic?.topic) return null;
  const { playlist, title } = dataTopic?.topic;
  console.log(dataTopic);
  return (
    <div>
      <HeadingLine>{title}</HeadingLine>
      <GridLayout>
        {playlist &&
          playlist.length > 0 &&
          playlist.map((item: MusicItemType) => (
            <MusciItem key={v4()} heading="abc" data={item}></MusciItem>
          ))}
      </GridLayout>
    </div>
  );
}
