import * as React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
export interface HomeBannerProps {}

export default function HomeBanner(props: HomeBannerProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataBanner = data.showcase;
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {dataBanner &&
          dataBanner.length > 0 &&
          dataBanner.map((item) => <SwiperSlide>Slide 1</SwiperSlide>)}
      </Swiper>
    </>
  );
}
