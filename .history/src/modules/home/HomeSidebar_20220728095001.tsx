import * as React from "react";
import { Link } from "react-router-dom";

export interface HomeSidebarprops {}

export function HomeSidebar(props: HomeSidebarprops) {
  return (
    <div className="max-w-[200px] w-full h-full py-5 px-4 border-r border-white">
      <div className="flex items-center gap">
        <img src="/logo.png" alt="" />
        <button>Nâng cấp</button>
      </div>
    </div>
  );
}
