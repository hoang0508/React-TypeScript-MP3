import * as React from "react";
import { useSelector } from "react-redux";

export interface PlayListContentProps {}

export default function PlayListContent(props: PlayListContentProps) {
  const data = useSelector((state: any) => state.music.dataPlayList);
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 17 ~ PlayListPage ~ data",
    data
  );
  if (!data?.playlist) return null;
  const { thumbnail } = data?.playlist;
  return (
    <div className="flex gap-x-6">
      <div>
        <img src={thumbnail} alt="" />
      </div>
      <div></div>
    </div>
  );
}
