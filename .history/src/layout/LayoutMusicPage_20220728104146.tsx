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
      <div>
        <div className="flex-1">
          <HomeMenuTab></HomeMenuTab>
          {children}
        </div>
      </div>
    </>
  );
}
