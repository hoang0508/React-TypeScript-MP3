import * as React from "react";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";

export interface FooterProps {}

const footerLink = [
  {
    id: 1,
    title: "Giới thiệu",
  },
  {
    id: 2,
    title: "SP-DV",
  },
  {
    id: 3,
    title: "Hỗ trợ",
  },
  {
    id: 4,
    title: "Thỏa thuận dịch vụ",
  },
];

export default function Footer(props: FooterProps) {
  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-between border-b border-b-borderColor">
        <div>
          {footerLink.length > 0 &&
            footerLink.map((item) => (
              <NavLink key={v4()} to={"/"}>
                {item.title}
              </NavLink>
            ))}
        </div>
        <div>l</div>
      </div>
      <div></div>
    </div>
  );
}
