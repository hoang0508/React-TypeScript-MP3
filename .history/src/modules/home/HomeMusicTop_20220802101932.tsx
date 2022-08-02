import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../music";
import MusciItem from "../music/MusicItem";

export interface HomeMusicTopProps {}

export default function HomeMusicTop(props: HomeMusicTopProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const dataTop = data?.top100;
  return (
    <div className="grid grid-cols-4 gap-x-[18px]">
      {dataTop &&
        dataTop.length > 0 &&
        dataTop
          .slice(0, 4)
          .map((item: MusicItemType) => (
            <MusciItem key={v4()} data={item}></MusciItem>
          ))}
    </div>
  );
}
