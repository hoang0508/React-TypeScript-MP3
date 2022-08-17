import * as React from "react";
import PlayMusic from "../modules/Menu/PlayMusic/Playmusic";
import { Sidebar } from "../modules/Menu/Sidebar/Sidebar";
import VideoList from "../modules/video/VideoList";
import Footer from "./Footer";

interface ILayoutMusicPageprops {
  children: any;
  musicSidebarR?: boolean;
  videoList?: boolean;
}

export function LayoutMusicPage({
  children,
  musicSidebarR,
  videoList,
}: ILayoutMusicPageprops) {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="pl-[200px]">
        <div className="flex">
          <div className="w-[72%]">
            <div className="border-b border-b-borderColor py-6 px-8">
              {children}
            </div>
            <Footer />
          </div>
          {musicSidebarR && (
            <div className="w-[320px] min-h-screen fixed top-0 right-0 bottom-0 border-l border-borderColor px-7 py-7">
              <PlayMusic></PlayMusic>
            </div>
          )}
          {videoList && (
            <div className="w-[320px] min-h-screen fixed top-0 right-0 bottom-0 border-l border-borderColor px-7 py-7">
              <VideoList></VideoList>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
