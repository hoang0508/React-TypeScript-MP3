import * as React from "react";
import { HomeMenuTab } from "../modules/home/HomeMenuTab";
import { HomeSidebar } from "../modules/home/HomeSidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <>
      <HomeSidebar></HomeSidebar>
      <div className="px-l-[200px]">
        <HomeMenuTab></HomeMenuTab>
        {children}
      </div>
    </>
  );
}
