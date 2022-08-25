import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { setActiveSelect } from "../../../redux/SearchSlice";
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
  const dispatch = useDispatch();
  React.useEffect(() => {
    const active = dataSelect && dataSelect[0]?.head;
    dispatch(setActiveSelect(active));
  }, [dataSelect, dispatch]);

  const { activeSelect } = useSelector((state: any) => state.search);
  console.log(
    "🚀 ~ file: MenuSelect.tsx ~ line 26 ~ MenuSelect ~ activeSelect",
    activeSelect
  );

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
              onClick(item?.head);
            }}
          >
            {item.title}
          </span>
        ))}
    </div>
  );
}
