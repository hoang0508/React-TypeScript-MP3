import * as React from "react";
import { useSelector } from "react-redux";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";

export interface HomeMusicTopProps {}

export default function HomeMusicTop(props: HomeMusicTopProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataTop = data?.top100;
  console.log(
    "🚀 ~ file: HomeMusicTop.tsx ~ line 9 ~ HomeMusicTop ~ dataTop",
    dataTop
  );
  return (
    <div className="grid grid-cols-4 gap-x-[18px]">
      {dataTop &&
        dataTop.length > 0 &&
        dataTop
          .slice(0, 4)
          .map((item: MusicItemType) => <MusciItem data={item}></MusciItem>)}
    </div>
  );
}
