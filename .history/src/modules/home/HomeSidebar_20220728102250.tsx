import * as React from "react";
import { Link } from "react-router-dom";

export interface HomeSidebarprops {}

export function HomeSidebar(props: HomeSidebarprops) {
  return (
    <div className="max-w-[200px] w-full h-full py-5 px-4">
      <div className="flex items-center gap-x-6">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[48px] h-[24px] object-cover"
        />
        <button className="border-borderColor rounded-xl py-1 px-3 border text-xs">
          Nâng cấp
        </button>
      </div>
    </div>
  );
}
