import * as React from "react";
import "../Menu.scss";
export interface IMenuSelectProps {}

export default function MenuSelect(props: IMenuSelectProps) {
  return (
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5">
      <span className="menu-item menu-active">Tất cả</span>
      <span className="menu-item">Tất cả</span>
      <span className="menu-item">Tất cả</span>
      <span className="menu-item">Tất cả</span>
    </div>
  );
}
