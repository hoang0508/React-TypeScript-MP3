import * as React from "react";
import { useSelector } from "react-redux";

interface MusicListFeedProps {
  heading: string;
}

export default function MusicListFeed({ heading }: MusicListFeedProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: MusicListFeed.tsx ~ line 10 ~ MusicListFeed ~ data",
    data
  );
  let dataFeed;
  switch (heading) {
    case "miss":
      return (dataFeed = data?.topicEvent[0]);
    default:
      break;
  }
  console.log(dataFeed);
  return <div>Music List</div>;
}
