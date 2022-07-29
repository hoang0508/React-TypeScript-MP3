import * as React from "react";
import { HomeMenuTab } from "../modules/home/HomeMenuTab";
import { HomeSidebar } from "../modules/home/HomeSidebar";
import MusicPlay from "../modules/MusicPlay/MusicPlay";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <>
      <HomeSidebar></HomeSidebar>
      <div className="pl-[200px]">
        <HomeMenuTab></HomeMenuTab>
        {children}
      </div>
      <MusicPlay></MusicPlay>
    </>
  );
}
