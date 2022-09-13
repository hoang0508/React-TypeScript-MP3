import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsActiveAcc } from "../../redux/AccordionSlice";
import { IconArrowDown } from "../icon";

interface IAccordionHeader {
  icon: any;
  title: string;
  className?: string;
}

const AccordionHeader = ({ className, title, icon }: IAccordionHeader) => {
  const dispatch = useDispatch();
  const { isActiceAcc } = useSelector((state: any) => state.accordion);
  const handleAccordionShow = () => {
    dispatch(setIsActiveAcc(!isActiceAcc));
  };
  return (
    <div
      onClick={() => handleAccordionShow()}
      className={`flex items-center justify-between cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-x-3">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <span className="w-5 h-5">
        <IconArrowDown />
      </span>
    </div>
  );
};

export default AccordionHeader;
