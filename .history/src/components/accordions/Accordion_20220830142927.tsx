import React from "react";
import { IconArrowDown } from "../icon";

interface IAccordion {
  icon: string;
  title: string;
}

const Accordion = ({ icon, title }: IAccordion) => {
  return (
    <div>
      <div>
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
