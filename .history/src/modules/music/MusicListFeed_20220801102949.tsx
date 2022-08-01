import * as React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import MusciItem from "./MusicItem";
import "./MusicList.scss";
import { MusicItemType } from "./index";
import HeadingLine from "../../components/common/Headingline";
interface MusicListFeedProps {
  heading: string;
}

export default function MusicListFeed({ heading }: MusicListFeedProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  let dataFeed;
  let dataHeading;
  switch (heading) {
    case "miss":
      dataFeed = data?.topicEvent ? data?.topicEvent[0]?.listPlaylist : null;
      dataHeading = data?.topicEvent ? data?.topicEvent[0]?.groupName : null;
      break;
    case "select":
      dataFeed = data?.topicEvent ? data?.topicEvent[1]?.listPlaylist : null;
      dataHeading = data?.topicEvent ? data?.topicEvent[1]?.groupName : null;
      break;
    case "fire":
      dataFeed = data?.topicEvent ? data?.topicEvent[2]?.listPlaylist : null;
      dataHeading = data?.topicEvent ? data?.topicEvent[1]?.groupName : null;
      break;
    default:
      break;
  }
  const h = dataHeading.split(" ");
  console.log("🚀 ~ file: MusicListFeed.tsx ~ line 36 ~ MusicListFeed ~ h", h);
  return (
    <>
      <HeadingLine>{dataHeading}</HeadingLine>
      <div className="music-list">
        <Swiper grabCursor spaceBetween={20} slidesPerView={"auto"}>
          {dataFeed &&
            dataFeed.length > 0 &&
            dataFeed.map((item: MusicItemType) => (
              <SwiperSlide key={item.key}>
                <MusciItem data={item} heading={"abc"}></MusciItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
