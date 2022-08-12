import * as React from "react";
import { useSelector } from "react-redux";

export interface PlayListContentProps {}

export default function PlayListContent(props: PlayListContentProps) {
  const data = useSelector((state: any) => state.music.dataPlayList);
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 17 ~ PlayListPage ~ data",
    data
  );
  return <div>kkkk</div>;
}
