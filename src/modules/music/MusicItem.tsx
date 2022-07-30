import * as React from "react";
import { IconDots, IconPlay } from "../../components/icon";
import "./MusicList.scss";
interface MusciItemProps {
  children: any;
}

export default function MusciItem({ children }: MusciItemProps) {
  return (
    <div>
      <div className="relative mb-3 overflow-hidden music-item">
        <div className="h-[177px] music-image">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="w-full h-full rounded-lg object-cover"
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
      text-text1"
      >
        {children}
      </h3>
    </div>
  );
}
