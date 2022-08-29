import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";

export interface PlayListContentProps {}

export default function PlayListContent(props: PlayListContentProps) {
  const data = useSelector((state: any) => state.music.dataPlayList);
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 17 ~ PlayListPage ~ data",
    data
  );
  if (!data?.playlist) return null;
  const dataPlayList = data?.playlist;
  const { title, artists, dateCreate, listTag } = data?.playlist;
  return (
    <div className="flex gap-x-6">
      <div>
        <MusciItem
          data={dataPlayList}
          classNames="w-[238px h-[238px]"
          playNot
          isPlayList
        ></MusciItem>
      </div>
      <div>
        <div className="flex items-center gap-x-1 mb-3">
          <span className="text-text2 font-medium">Playlist: </span>{" "}
          <MusicTitle className="font-semibold text-base">{title}</MusicTitle>
        </div>
        <div className="mb-4">
          <MusicImageAuthor dataAuthor={artists}></MusicImageAuthor>
        </div>
        <span className="font-medium mb-4 inline-block">
          {new Date(dateCreate).toLocaleDateString("vi-VI")}
        </span>
        <MusicTitle className="font-bold text-sm text-text2">
          {title}
        </MusicTitle>
        <div className="flex gap-x-4 mt-3 items-center">
          <h3>Tags: </h3>
          <div className="flex flex-wrap items-center gap-x-4">
            {listTag &&
              listTag.length > 0 &&
              listTag.map((item: MusicItemType) => (
                <span key={v4()} className="bg-bgColor2 py-2 px-5 rounded">
                  {item.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
