import React from "react";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";
import "./Accordion.scss";

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
    <div className="my-auto ml-[10px] mr-[10px]">
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
