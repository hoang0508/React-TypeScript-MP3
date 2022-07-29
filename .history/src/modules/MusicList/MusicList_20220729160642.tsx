import * as React from "react";
import { v4 } from "uuid";
import { IconDots } from "../../components/icon";
import "./MusicList.scss";
import MusicItem from "./parts/MusicItem";
interface MusicListProps {
  data: any;
}
interface MusicItemProps {
  avatar: string;
  bgImage: string;
  coverImage: string;
  creator: string;
  lyric: string;
  music: string;
  title: string;
  url: string;
}
export default function MusicList({ data }: MusicListProps) {
  console.log("🚀 ~ file: MusicList.tsx ~ line 10 ~ MusicList ~ data", data);
  return (
    <div className="w-[800px] mx-auto cursor-pointer">
      {data &&
        data.length > 0 &&
        data.map((data: MusicItemProps, index: number) => (
          <div className="flex items-center gap-x-2 mb-2" key={v4()}>
            <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgColor2 rounded-full text-text2 font-medium">
              {index + 1}
            </span>
            <div className="flex items-center justify-between bg-bgColor2 w-full py-3 px-4 music-list">
              <MusicItem data1={data}></MusicItem>
              <div className="music-dot--active">
                <IconDots />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
