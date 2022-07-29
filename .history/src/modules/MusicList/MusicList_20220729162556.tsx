import * as React from "react";
import { v4 } from "uuid";
import { IconDots } from "../../components/icon";
import "./MusicList.scss";
import MusicItem from "./parts/MusicItem";
import MusicItemProps from "./index";
interface MusicListProps {
  data: MusicItemProps[];
}

export default function MusicList({ data }: MusicListProps) {
  return (
    <div className="w-[800px] mx-auto cursor-pointer">
      {data &&
        data.length > 0 &&
        data.map((item: MusicItemProps, index: number) => (
          <div className="flex items-center gap-x-2 mb-2" key={v4()}>
            <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgColor2 rounded-full text-text2 font-medium">
              {index + 1}
            </span>
            <div className="flex items-center justify-between bg-bgColor2 w-full py-3 px-4 music-list">
              <MusicItem data={item}></MusicItem>
              <div className="music-dot--active">
                <IconDots />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
