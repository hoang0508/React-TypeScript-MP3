import * as React from "react";
import { useSelector } from "react-redux";
import MusciItem from "../music/MusicItem";
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
  const { title } = data?.playlist;
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
        <span>
          Playlist: <MusicTitle>{title}</MusicTitle>
        </span>
      </div>
    </div>
  );
}
