import * as React from "react";
import { useSelector } from "react-redux";

export interface MusicListFeedProps {}

export default function MusicListFeed(props: MusicListFeedProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: MusicList.tsx ~ line 9 ~ MusicList ~ data",
    data.topicEvent
  );
  return <div>Music List</div>;
}
