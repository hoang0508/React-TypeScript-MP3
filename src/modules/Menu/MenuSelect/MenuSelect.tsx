import * as React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import "../Menu.scss";

interface IMenuItem {
  id: number;
  title: string;
  head: string;
  link?: string;
}

interface IMenuSelectProps {
  dataSelect: IMenuItem[];
  onClick?: any;
}

export default function MenuSelect({ dataSelect, onClick }: IMenuSelectProps) {
  // Active select tab
  const { activeSelect } = useSelector((state: any) => state.search);

  return (
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5 mb-5 cursor-pointer">
      {dataSelect &&
        dataSelect.length > 0 &&
        dataSelect.map((item: IMenuItem) => {
          if (item?.link) {
            return <NavLink to={item?.link}>{item?.title}</NavLink>;
          }
          return (
            <span
              key={v4()}
              className={
                activeSelect === item?.head
                  ? "menu-active font-semibold"
                  : "menu-item font-medium text-text2"
              }
              onClick={() => {
                onClick(item?.head);
              }}
            >
              {item.title}
            </span>
          );
        })}
    </div>
  );
}
