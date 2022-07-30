import * as React from "react";
import { IconDots, IconPlay } from "../../components/icon";
import "./MusicList.scss";
import { MusicItemType } from "./index";
interface MusciItemProps {
  data: MusicItemType;
}

export default function MusciItem({ data }: MusciItemProps) {
  return (
    <div>
      <div className="relative mb-3 overflow-hidden music-item">
        <div className="h-[177px] music-image">
          <img
            src={data.thumbnail}
            alt=""
            className="w-full h-full rounded-lg object-cover overflow-hidden"
          />
        </div>
        <div className="music-overlay"></div>
        <div className="music-icon">
          <span
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 cursor-pointer text-xl text-white
        "
          >
            <IconPlay className="w-10 h-10"></IconPlay>
          </span>
          <span className="absolute top-2 right-2">
            <IconDots></IconDots>
          </span>
        </div>
      </div>
      <h3
        className="font-medium text-sm
      text-text1 music-title"
      >
        {data.title}
      </h3>
    </div>
  );
}
