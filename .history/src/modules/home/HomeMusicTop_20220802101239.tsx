import * as React from "react";
import { useSelector } from "react-redux";

export interface HomeMusicTopProps {}

export default function HomeMusicTop(props: HomeMusicTopProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: HomeMusicTop.tsx ~ line 8 ~ HomeMusicTop ~ data",
    data
  );
  return <div>Music top</div>;
}
