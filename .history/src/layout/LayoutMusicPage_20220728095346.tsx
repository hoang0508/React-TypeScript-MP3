import * as React from "react";
import { HomeSidebar } from "../modules/home/HomeSidebar";

export interface ILayoutMusicPageprops {}

export function LayoutMusicPage(props: ILayoutMusicPageprops) {
  return (
    <div className="">
      <div>
        <HomeSidebar></HomeSidebar>
      </div>
    </div>
  );
}
