import * as React from "react";
import { useSelector } from "react-redux";

export interface MusicListProps {}

export default function MusicList(props: MusicListProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: MusicList.tsx ~ line 9 ~ MusicList ~ data",
    data.topicEvent
  );
  return <div>Music List</div>;
}
