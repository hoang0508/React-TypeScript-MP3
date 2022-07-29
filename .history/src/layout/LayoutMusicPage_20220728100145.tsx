import * as React from "react";
import { HomeMenuTab } from "../modules/home/HomeMenuTab";
import { HomeSidebar } from "../modules/home/HomeSidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <div className="flex items-center">
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
