import * as React from "react";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeMusic from "../modules/home/HomeMusic";

export interface MusicAsiaPageProps {}

export default function MusicAsiaPage(props: MusicAsiaPageProps) {
  return (
    <LayoutMusicPage>
      <HomeMusic list="top100_CA"></HomeMusic>
    </LayoutMusicPage>
  );
}
