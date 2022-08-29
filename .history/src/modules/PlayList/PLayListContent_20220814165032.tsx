import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";
import MusicImageAuthor from "../music/parts/MusicImageAuthor";
import MusicTitle from "../music/parts/MusicTitle";
import PlayListItem from "./parts/PlayListItem";
import PlayListTag from "./parts/PlayListTag";

export interface PlayListContentProps {}

export default function PlayListContent(props: PlayListContentProps) {
  const data = useSelector((state: any) => state.music.dataPlayList);
  if (!data?.playlist) return null;
  const dataPlayList = data?.playlist;
  const { title, artists, dateCreate, listTag } = data?.playlist;
  return (
    <div className="flex gap-x-6 mb-6">
      <PlayListItem dataPlayList={dataPlayList}></PlayListItem>
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
        <PlayListTag listTag={listTag}></PlayListTag>
      </div>
    </div>
  );
}
