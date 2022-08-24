import * as React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import MusciItem from "./MusicItem";
import "./MusicList.scss";
import HeadingLine from "../../components/common/Headingline";
import { v4 } from "uuid";
import { MusicItemType, NavigateName } from "../../utils/enum";
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
      dataHeading = data?.topicEvent ? data?.topicEvent[2]?.groupName : null;
      break;
    default:
      break;
  }
  return (
    <>
      {dataHeading && <HeadingLine>{dataHeading.split("_")[0]}</HeadingLine>}
      <div className="music-list">
        <Swiper grabCursor spaceBetween={20} slidesPerView={"auto"}>
          {dataFeed &&
            dataFeed.length > 0 &&
            dataFeed.map((item: MusicItemType) => (
              <SwiperSlide key={v4()}>
                <MusciItem
                  data={item}
                  heading={"abc"}
                  isNavigate={NavigateName.PlayList}
                ></MusciItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}
