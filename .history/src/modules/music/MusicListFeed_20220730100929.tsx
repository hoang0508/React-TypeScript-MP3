import * as React from "react";
import { useSelector } from "react-redux";
import { IconDots, IconPlay } from "../../components/icon";

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
    <div className="relative h-[177px]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <h3>Nhạc Trẻ Nghe Là Mê</h3>
      <div>
        <span>
          <IconPlay></IconPlay>
        </span>
        <span>
          <IconDots></IconDots>
        </span>
      </div>
    </div>
  );
}