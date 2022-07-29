import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  IconDiscover,
  IconHome,
  IconSearch,
  Iconsetting,
} from "../../components/icon";
import "./Home.scss";

export interface HomeSidebarprops {}

const SidebarLinks = [
  {
    id: 1,
    title: "Trang chủ",
    icon: <IconHome />,
    to: "/",
  },
  {
    id: 2,
    title: "Tìm kiếm",
    icon: <IconSearch />,
    to: "/timkiem",
  },
  {
    id: 3,
    title: "Khám phá",
    icon: <IconDiscover />,
    to: "/khampha",
  },
];

export function HomeSidebar(props: HomeSidebarprops) {
  const linkClass = `flex items-center gap-x-3 mb-4 relative pl-3`;
  return (
    <div className="max-w-[200px] w-full h-full fixed top-0 left-0 z-20 border-r-2 border-borderColor">
      <div className="flex items-center gap-x-6 py-3 px-4">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[48px] h-[24px] object-cover"
        />
        <button className="border-borderColor rounded-xl py-1 px-3 border text-xs">
          Nâng cấp
        </button>
      </div>
      <div className="flex items-center bg-bgColor2 justify-between my-4 p-3 text-sm">
        <Link to={"/"}>Đăng nhập</Link>
        <Iconsetting />
      </div>
      {SidebarLinks &&
        SidebarLinks.length > 0 &&
        SidebarLinks.map((link) => (
          <NavLink
            to={link.to}
            className={({ isActive }) =>
              isActive ? `${linkClass} link-border text-primary` : linkClass
            }
          >
            {link.icon}
            <span>{link.title}</span>
          </NavLink>
        ))}
    </div>
  );
}
