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
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5 mb-5">
      {dataSelect &&
        dataSelect.length > 0 &&
        dataSelect.map((item: IMenuItem) => (
          <span key={item.id} className="menu-item">
            {item.title}
          </span>
        ))}
    </div>
  );
}
