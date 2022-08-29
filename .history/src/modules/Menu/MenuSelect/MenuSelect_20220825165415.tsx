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
  console.log(
    "🚀 ~ file: MenuSelect.tsx ~ line 19 ~ MenuSelect ~ activeSelect",
    activeSelect
  );
  React.useEffect(() => {
    const active = dataSelect && dataSelect[0]?.head;
    setActiveSelect(active);
  }, [activeSelect, dataSelect]);

  const handleActiveSelect = (active: string) => {
    setActiveSelect(active);
  };
  return (
    <div className="flex items-center gap-x-16 justify-center  border-b border-borderColor pb-5 mb-5">
      {dataSelect &&
        dataSelect.length > 0 &&
        dataSelect.map((item: IMenuItem) => (
          <span
            key={v4()}
            className={onClick === item?.head ? "menu-active" : "menu-item"}
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