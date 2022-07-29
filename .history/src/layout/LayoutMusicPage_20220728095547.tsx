import * as React from "react";
import { HomeSidebar } from "../modules/home/HomeSidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <div className="">
      <div>
        <HomeSidebar></HomeSidebar>
      </div>
      {children}
    </div>
  );
}
