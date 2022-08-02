import * as React from "react";
import PlayMusic from "../modules/Menu/PlayMusic/Playmusic";
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
          <div className="w-[70%] py-6 px-8">{children}</div>
          <div className="w-[300px] fixed top-0 right-0 bottom-0 border-l-2 border-borderColor px-8 py-8">
            <PlayMusic></PlayMusic>
          </div>
        </div>
      </div>
    </>
  );
}
