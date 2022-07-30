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
      return (dataFeed = data[0].listPlaylist);
    default:
      break;
  }
  console.log(dataFeed);
  return <div>Music List</div>;
}
