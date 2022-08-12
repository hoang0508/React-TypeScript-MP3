import * as React from "react";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";

export interface PlayListPageProps {}

export default function PlayListPage(props: PlayListPageProps) {
  const { id } = useParams();
  console.log(
    "🚀 ~ file: PlayListPage.tsx ~ line 9 ~ PlayListPage ~ param",
    id
  );
  return <LayoutMusicPage>hhh</LayoutMusicPage>;
}
