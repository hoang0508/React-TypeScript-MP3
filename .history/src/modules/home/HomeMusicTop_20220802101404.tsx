import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicTopProps {}

export default function HomeMusicTop(props: HomeMusicTopProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataTop = data?.top100;
  console.log(
    "🚀 ~ file: HomeMusicTop.tsx ~ line 9 ~ HomeMusicTop ~ dataTop",
    dataTop
  );
  return <div>Music top</div>;
}
