import * as React from "react";
import { useSelector } from "react-redux";
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
  const { title, artists, dateCreate } = data?.playlist;
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
        <div className="mb-3">
          <MusicImageAuthor dataAuthor={artists}></MusicImageAuthor>
        </div>
        <span className="font-medium">
          {new Date(dateCreate).toLocaleDateString("vi-VI")}
        </span>
      </div>
    </div>
  );
}
