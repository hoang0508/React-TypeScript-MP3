import * as React from "react";
import { Sidebar } from "../modules/Menu/Sidebar/Sidebar";

interface ILayoutMusicPageprops {
  children: any;
}

export function LayoutMusicPage({ children }: ILayoutMusicPageprops) {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="pl-[200px] pr-[30%]">
        <div className="flex">
          <div className="w-[75%] py-6 px-8">{children}</div>
          <div className="w-[30%] fixed top-0 right-0 bottom-0">Play music</div>
        </div>
      </div>
    </>
  );
}
