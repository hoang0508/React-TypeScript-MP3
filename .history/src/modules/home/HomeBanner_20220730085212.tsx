import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeBannerProps {}

export default function HomeBanner(props: HomeBannerProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataBanner = data.showcase;
  console.log(
    "🚀 ~ file: HomeBanner.tsx ~ line 9 ~ HomeBanner ~ dataBanner",
    dataBanner
  );
  return <div>Music Banner</div>;
}
