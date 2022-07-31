import * as React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import MusciItem from "./MusicItem";
import "./MusicList.scss";
import { MusicItemType } from "./index";
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
    <div className="music-list">
      <Swiper grabCursor spaceBetween={20} slidesPerView={"auto"}>
        {dataFeed &&
          dataFeed.length > 0 &&
          dataFeed.map((item: MusicItemType) => (
            <SwiperSlide>
              <MusciItem>Nhạc Trẻ Nghe Là Mê</MusciItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}