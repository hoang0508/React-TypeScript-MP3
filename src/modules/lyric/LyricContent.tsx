import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";

export interface ILyricContentProps {}

export default function LyricContent(props: ILyricContentProps) {
  const { dataShareLyricSong } = useSelector((state: any) => state.lyric);
  if (!dataShareLyricSong?.artists) return null;

  const { title, userNameUpload, artists } = dataShareLyricSong;

  // convertLowercase , capitalize
  const convertLower = (item: string) => {
    const itemChart = item && item.charAt(0);
    const itemSlice = item.slice(1).toLocaleLowerCase();
    return `${itemChart}${itemSlice}`;
  };

  const convertToCapitalize = title
    .split(" ")
    .map((item: string) => convertLower(item))
    .join(" ");

  return (
    <div className="flex gap-x-6 mb-6">
      <MusciItem
        data={dataShareLyricSong}
        classNames="w-[238px] h-[238px]"
        playNot
        isPlayList
      ></MusciItem>
      <div>
        <div className="flex items-center gap-x-1 mb-3">
          <span className="text-text2 font-medium">Bài hát: </span>{" "}
          <MusicTitle className="font-semibold text-base">
            {convertToCapitalize}
          </MusicTitle>
        </div>
        <div className="mb-4">
          <MusicImageAuthor authorImage dataAuthor={artists}></MusicImageAuthor>
        </div>
        <span className="font-medium mb-4 inline-block text-text2">
          Đăng tải bởi: {""}{" "}
          <span className="text-primary">
            {userNameUpload?.split("_").join(" ").toUpperCase()}
          </span>
        </span>
      </div>
    </div>
  );
}
