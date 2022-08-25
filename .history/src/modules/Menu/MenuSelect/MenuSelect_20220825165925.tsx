import * as React from "react";
import { v4 } from "uuid";
import "../Menu.scss";

interface IMenuItem {
  id: number;
  title: string;
  head: string;
}

interface IMenuSelectProps {
  dataSelect: IMenuItem[];
  onClick: any;
}

export default function MenuSelect({ dataSelect, onClick }: IMenuSelectProps) {
  const [activeSelect, setActiveSelect] = React.useState<string>();
  React.useEffect(() => {
    const active = dataSelect && dataSelect[0]?.head;
    console.log(
      "🚀 ~ file: MenuSelect.tsx ~ line 24 ~ React.useEffect ~ active",
      active
    );
    setActiveSelect(active);
  }, [activeSelect, dataSelect]);

  const handleActiveSelect = (active: string) => {
    console.log(
      "🚀 ~ file: MenuSelect.tsx ~ line 28 ~ handleActiveSelect ~ active",
      active
    );
    setActiveSelect(active);
  };
  return (
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5 mb-5">
      {dataSelect &&
        dataSelect.length > 0 &&
        dataSelect.map((item: IMenuItem) => (
          <span
            key={v4()}
            className={
              activeSelect === item?.head ? "menu-active" : "menu-item"
            }
            onClick={() => {
              handleActiveSelect(item?.head);
              onClick(item?.head);
            }}
          >
            {item.title}
          </span>
        ))}
    </div>
  );
}
