import * as React from "react";
import { NavLink } from "react-router-dom";

export interface HomeMenuTabProps {}

const MenuLinks = [
  {
    id: 1,
    title: "Việt Nam",
    to: "/vietnam",
  },
  {
    id: 2,
    title: "Âu Mỹ",
    to: "/vietnam",
  },
  {
    id: 3,
    title: "Châu Á",
    to: "/vietnam",
  },
  {
    id: 4,
    title: "Không lời",
    to: "/vietnam",
  },
];

export function HomeMenuTab(props: HomeMenuTabProps) {
  return (
    <div className="border-b border-borderColor flex items-center justify-center gap-x-14 py-5">
      {MenuLinks.length > 0 &&
        MenuLinks.map((link) => (
          <NavLink
            to={link.to}
            key={link.id}
            className="text-sm text-text1 font-medium"
          >
            {link.title}
          </NavLink>
        ))}
    </div>
  );
}
