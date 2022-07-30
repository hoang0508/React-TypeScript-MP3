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
    <div className="grid grid-cols-4 gap-x-5">
      <div>
        <div className="relative">
          <div className="h-[177px] ">
            <img
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
          <div className="">
            <span
              className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer text-xl text-white
            "
            >
              <IconPlay className="w-10 h-10"></IconPlay>
            </span>
            <span className="absolute top-1 right-2">
              <IconDots></IconDots>
            </span>
          </div>
        </div>
        <h3>Nhạc Trẻ Nghe Là Mê</h3>
      </div>
    </div>
  );
}
