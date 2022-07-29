import * as React from "react";
import { Link } from "react-router-dom";
import { Iconsetting } from "../../components/icon";

export interface HomeSidebarprops {}

export function HomeSidebar(props: HomeSidebarprops) {
  return (
    <div className="max-w-[200px] w-full h-full fixed top-0 left-0 z-20 border-r-2 border-borderColor p-2">
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
      <div className="flex items-center bg-bgColor2 justify-between">
        <Link to={"/"}>Đăng nhập</Link>
        <Iconsetting />
      </div>
    </div>
  );
}
