import * as React from "react";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import HomeMusic from "../modules/home/HomeMusic";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return (
    <LayoutMusicPage>
      <HomeMusic></HomeMusic>
    </LayoutMusicPage>
  );
}
