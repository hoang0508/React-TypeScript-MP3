import * as React from "react";
import { HomeMenuTab } from "../modules/home/HomeMenuTab";
import { HomeSidebar } from "../modules/home/HomeSidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <div className="">
      <div className="">
        <HomeSidebar></HomeSidebar>
      </div>
      <div>
        <HomeMenuTab />
        {children}
      </div>
    </div>
  );
}
