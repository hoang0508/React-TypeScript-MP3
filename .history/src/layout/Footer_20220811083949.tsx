import * as React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import "./Footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IconLogo } from "../components/icon";

export interface FooterProps {}

const footerLink = [
  {
    id: 1,
    title: "Giới thiệu",
    image: "/app-store.png",
  },
  {
    id: 2,
    title: "SP-DV",
    image: "/google-play.png",
  },
  {
    id: 3,
    title: "Hỗ trợ",
    image: "/app-gallery.png",
  },
  {
    id: 4,
    title: "Thỏa thuận dịch vụ",
  },
];

export default function Footer(props: FooterProps) {
  return (
    <div className="py-6 px-8">
      <FooterList></FooterList>
      <div className="pt-7 pb-4">
        <div className="flex items-center gap-x-5">
          <div>
            <IconLogo />
          </div>
          <div>
            <span>CÔNG TY CỔ PHẦN N C T</span>
            <p>
              Chủ sở hữu website: <span>Ông Nhan Thế Luân</span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

const FooterList = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-borderColor pb-4">
      <div className="flex-1 flex gap-x-[10px]">
        {footerLink.length > 0 &&
          footerLink.map((item) => (
            <NavLink key={v4()} to={"/"} className="footer-link">
              {item.title}
            </NavLink>
          ))}
      </div>
      <div className="flex-1 flex items-center justify-end gap-x-3">
        <span>
          <FaFacebookSquare />
        </span>
        <span>
          <FiInstagram />
        </span>
        {footerLink.length > 0 &&
          footerLink.map((item) => (
            <div className="h-[24px]" key={item.id}>
              <img
                src={item.image}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};
