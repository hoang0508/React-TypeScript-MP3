import React from "react";
import { IconArrowDown } from "../icon";

interface IAccordionHeader {
  icon: any;
  title: string;
  className?: string;
  onClick: () => void;
}

const AccordionHeader = ({
  className,
  onClick,
  title,
  icon,
}: IAccordionHeader) => {
  return (
    <div
      onClick={onClick}
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
