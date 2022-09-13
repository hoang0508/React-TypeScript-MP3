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
  linkAccord?: ILinkAccordChild[];
}

const Accordion = ({ icon, title, className, linkAccord }: IAccordion) => {
  return (
    <div>
      <AccordionHeader
        icon={icon}
        title={title}
        className={className}
      ></AccordionHeader>
      <AccordionContent linkAccord={linkAccord}></AccordionContent>
    </div>
  );
};

export default Accordion;
