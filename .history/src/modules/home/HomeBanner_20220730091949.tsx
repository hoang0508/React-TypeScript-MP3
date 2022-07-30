import * as React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
interface HomeBannerProps {
  description?: string;
  imageUrl?: string;
  key?: string;
  order?: number;
  thumbnail?: string;
  title?: string;
  url?: string;
}

export default function HomeBanner(props: HomeBannerProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataBanner = data.showcase;
  console.log(
    "🚀 ~ file: HomeBanner.tsx ~ line 16 ~ HomeBanner ~ dataBanner",
    dataBanner
  );
  return (
    <div className="min-h-[300px] mb-[70px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataBanner &&
          dataBanner.length > 0 &&
          dataBanner.map((item: HomeBannerProps) => (
            <SwiperSlide key={item.key}>
              <img src={item.thumbnail} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
