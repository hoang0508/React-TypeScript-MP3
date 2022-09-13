import React from "react";
import AccordionContent from "./AccordionContent";
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
      <AccordionContent linkAccord={linkAccord}></AccordionContent>
    </div>
  );
};

export default Accordion;
