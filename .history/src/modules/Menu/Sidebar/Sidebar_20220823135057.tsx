import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthenSignIn from "../../../Authentication/AuthenSignIn";
import AuthenSignUp from "../../../Authentication/AuthenSignUp";
import { Button } from "../../../components/button";
import {
  IconDiscover,
  IconHome,
  IconSearch,
  Iconsetting,
} from "../../../components/icon";
import {
  fetchDataUser,
  setIsShowSignIn,
  setIsShowSignUp,
} from "../../../redux/AuthenSlice";
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
  // dispatch authen signup
  const dispatch = useDispatch();
  // popup signup
  const handleAuthenSignUp = () => {
    dispatch(setIsShowSignUp(true));
  };

  // popup signin
  const handleAuthenSignIn = () => {
    dispatch(setIsShowSignIn(true));
  };

  // hiển thị userInfo
  React.useEffect(() => {
    dispatch(fetchDataUser());
  }, [dispatch]);

  const { userInfo } = useSelector((state: any) => state.authen);
  console.log(
    "🚀 ~ file: Sidebar.tsx ~ line 63 ~ Sidebar ~ userInfo",
    userInfo
  );

  const [name, setName] = React.useState<string>("");

  React.useEffect(() => {
    if (name === "") {
      setName(userInfo?.displayName);
    }
  }, [name, userInfo]);

  return (
    <>
      <div className="max-w-[200px] w-full h-full fixed top-0 left-0 z-20 border-r-2 border-borderColor">
        <div className="flex items-center gap-x-6 py-3 px-4">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[48px] h-[24px] object-cover"
          />
          <Button
            type="button"
            className="text-xs py-1 px-3 rounded-xl border-borderColor border"
          >
            Nâng cấp
          </Button>
        </div>
        <div className="flex items-center bg-bgColor2 justify-between my-4 p-3 text-sm">
          {name ? (
            <div className="flex items-center gap-x-2">
              <img
                src="/avatar-playlist.png"
                className="w-6 h-6 object-cover "
                alt=""
              />{" "}
              <span className="text-white">{name}</span>
            </div>
          ) : (
            <div className="flex gap-x-2 text-[13px] login-link cursor-pointer">
              <span onClick={() => handleAuthenSignIn()}>Đăng nhập</span>
              <span onClick={() => handleAuthenSignUp()}>Đăng ký</span>
            </div>
          )}
          <Iconsetting className="w-4 h-4" />
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
        <div className="flex ">
          {" "}
          <span>Đăng xuất</span>
        </div>
      </div>
      <AuthenSignUp />
      <AuthenSignIn />
    </>
  );
}
