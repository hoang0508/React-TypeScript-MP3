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
      <div className="pt-7 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div>
            <IconLogo />
          </div>
          <div>
            <span className="font-semibold mb-1 inline-block">
              CÔNG TY CỔ PHẦN N C T
            </span>
            <p className="text-text2 footer-note">
              <span className="pl-4">Chủ sở hữu website: </span>
              <span className="font-semibold">Ông Nhan Thế Luân</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <img
              src="https://stc-id.nixcdn.com/v12/images/Cong_Thuong.svg"
              alt=""
            />
          </div>
          <div>
            <img src="https://stc-id.nixcdn.com/v12/images/DMCA.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-[13px] flex flex-col gap-y-1 text-text2 font-medium">
        <p className="footer-note">
          Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày
          28/09/2015.
        </p>
        <p className="footer-note">
          Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và Đầu
          tư Tp.Hồ Chí Minh cấp ngày 01/03/2008.
        </p>
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
