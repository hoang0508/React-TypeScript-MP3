import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "./MusicItem";

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
    case "select":
      dataFeed = data?.topicEvent ? data?.topicEvent[1]?.listPlaylist : null;
      break;
    case "fire":
      dataFeed = data?.topicEvent ? data?.topicEvent[2]?.listPlaylist : null;
      break;
    default:
      break;
  }
  console.log(dataFeed);
  return (
    <div className="grid grid-cols-4 gap-x-5">
      <MusciItem>Nhạc Trẻ Nghe Là Mê</MusciItem>
    </div>
  );
}
