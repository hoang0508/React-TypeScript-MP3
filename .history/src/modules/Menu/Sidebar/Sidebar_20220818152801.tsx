import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../../../components/button";
import {
  IconDiscover,
  IconHome,
  IconSearch,
  Iconsetting,
} from "../../../components/icon";
import "./Sidebar.scss";

export interface Sidebarprops {}

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

export function Sidebar(props: Sidebarprops) {
  const linkClass = `flex items-center gap-x-3 mb-4 relative font-medium pl-3`;
  // dispatch
  // const dispatch =
  return (
    <div className="max-w-[200px] w-full h-full fixed top-0 left-0 z-20 border-r-2 border-borderColor">
      <div className="flex items-center gap-x-6 py-3 px-4">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[48px] h-[24px] object-cover"
        />
        <Button>Nâng cấp</Button>
      </div>
      <div className="flex items-center bg-bgColor2 justify-between my-4 p-3 text-sm">
        <div className="flex gap-x-2 text-xs login-link">
          <Link to={"/SignIn"}>Đăng nhập</Link>
          <Link to={"/SignUp"}>Đăng ký</Link>
        </div>
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
            key={link.id}
          >
            {link.icon}
            <span>{link.title}</span>
          </NavLink>
        ))}
    </div>
  );
}