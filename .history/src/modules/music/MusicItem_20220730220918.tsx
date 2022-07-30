import * as React from "react";
import { IconDots, IconPlay } from "../../components/icon";
import "./MusicList.scss";
import { MusicItemType } from "./index";
import MusicTitle from "./parts/MusicTitle";
interface MusciItemProps {
  data: MusicItemType;
  heading?: string;
  classNames?: string;
}

export default function MusciItem({
  data,
  heading,
  classNames = "h-[177px]",
}: MusciItemProps) {
  return (
    <div>
      <div className="relative mb-3 overflow-hidden music-item">
        <div className={`music-image ${classNames}`}>
          <img
            src={data?.thumbnail}
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
      {heading && <MusicTitle>{data?.title}</MusicTitle>}
    </div>
  );
}
