import * as React from "react";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";

export interface PlayListPageProps {}

export default function PlayListPage(props: PlayListPageProps) {
  const param = useParams();
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 9 ~ PlayListPage ~ param",
    param
  );
  return <LayoutMusicPage></LayoutMusicPage>;
}
