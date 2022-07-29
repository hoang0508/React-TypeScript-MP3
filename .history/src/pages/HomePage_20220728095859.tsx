import * as React from "react";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import { HomeSidebar } from "../modules/home/HomeSidebar";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return <LayoutMusicPage>Home</LayoutMusicPage>;
}
