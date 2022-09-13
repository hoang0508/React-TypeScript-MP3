import React from "react";
import { IconArrowDown } from "../icon";

interface IAccordionHeader {
  icon: any;
  title: string;
  className?: string;
}

const AccordionHeader = ({ className, title, icon }: IAccordionHeader) => {
  return (
    <div
      className={`flex items-center justify-between cursor-pointer ${className}`}
    >
      <div className="flex items-center gap-x-3">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <span>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default AccordionHeader;
