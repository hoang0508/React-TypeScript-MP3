import * as React from "react";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { LayoutMusicPage } from "../../../layout/LayoutMusicPage";

export interface MusicVietTruTinhProps {}

export default function MusicVietTruTinh(props: MusicVietTruTinhProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log(
    "🚀 ~ file: MusicVietTruTinh.tsx ~ line 10 ~ MusicVietTruTinh ~ data",
    data
  );
  const param = useParams();
  console.log(
    "🚀 ~ file: MusicVietTruTinh.tsx ~ line 15 ~ MusicVietTruTinh ~ param",
    param
  );
  // const dataList = data?.songs?.top100_VN[0]?.songs;
  return <LayoutMusicPage>hhh</LayoutMusicPage>;
}
