import * as React from "react";
import { useParams } from "react-router-dom";
import { LayoutMusicPage } from "../../../layout/LayoutMusicPage";

export interface MusicVietTruTinhProps {}

export default function MusicVietTruTinh(props: MusicVietTruTinhProps) {
  const { param } = useParams();
  console.log(
    "🚀 ~ file: MusicVietTruTinh.tsx ~ line 9 ~ MusicVietTruTinh ~ param",
    param
  );
  return <LayoutMusicPage>hhh</LayoutMusicPage>;
}
