import React from "react";
import { IconArrowDown } from "../icon";

interface IAccordion {
  icon: string;
  title: string;
  className: string;
}

const Accordion = ({ icon, title, className }: IAccordion) => {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="flex items-center">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <span>
        <IconArrowDown />
      </span>
    </div>
  );
};

export default Accordion;
