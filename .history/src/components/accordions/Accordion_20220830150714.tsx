import React from "react";
import { IconArrowDown } from "../icon";
import AccordionHeader from "./AccordionHeader";

interface ILinkAccordChild {
  title: string;
  to: string;
}

interface IAccordion {
  icon: any;
  title: string;
  className?: string;
  onClick: () => void;
  linkAccord?: ILinkAccordChild[];
}

const Accordion = ({
  icon,
  title,
  className,
  linkAccord,
  onClick,
}: IAccordion) => {
  return (
    <div>
      <AccordionHeader
        icon={icon}
        onClick={onClick}
        title={title}
        className={className}
      ></AccordionHeader>
      <div className="flex flex-col justify-center gap-x-2 text-center gap-y-3">
        {linkAccord &&
          linkAccord.length > 0 &&
          linkAccord.map((linkChild) => <span>{linkChild?.title}</span>)}
      </div>
    </div>
  );
};

export default Accordion;
