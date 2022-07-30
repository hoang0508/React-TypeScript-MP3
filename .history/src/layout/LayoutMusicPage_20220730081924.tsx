import * as React from "react";
import { HomeSidebar } from "../modules/home/HomeSidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <>
      <HomeSidebar></HomeSidebar>
      <div className="pl-[200px]">
        <div className="flex">
          {children}
          <div></div>
        </div>
      </div>
    </>
  );
}
