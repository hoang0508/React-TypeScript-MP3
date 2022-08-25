import * as React from "react";
import "../Menu.scss";

interface IMenuItem {
  id: number;
  title: string;
}

interface IMenuSelectProps {
  dataSelect: IMenuItem[];
}

export default function MenuSelect({ dataSelect }: IMenuSelectProps) {
  return (
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5">
      <span className="menu-active">Tất cả</span>
      <span className="menu-item">Tất cả</span>
      <span className="menu-item">Tất cả</span>
      <span className="menu-item">Tất cả</span>
    </div>
  );
}
