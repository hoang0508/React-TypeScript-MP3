import * as React from "react";
import { Sidebar } from "../modules/Menu/Sidebar/Sidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="pl-[200px]">
        <div className="flex">
          {children}
          <div></div>
        </div>
      </div>
    </>
  );
}
