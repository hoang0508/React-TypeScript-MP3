import * as React from "react";
import { useSelector } from "react-redux";

interface MusicListFeedProps {
  heading: string;
}

export default function MusicListFeed({ heading }: MusicListFeedProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  let dataFeed;
  switch (heading) {
    case "miss":
      dataFeed = data?.topicEvent ? data?.topicEvent[0]?.listPlaylist : null;
      break;
    default:
      break;
  }
  console.log(dataFeed);
  return <div>Music List</div>;
}
