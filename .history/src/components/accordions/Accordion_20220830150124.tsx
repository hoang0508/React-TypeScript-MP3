import React from "react";
import { IconArrowDown } from "../icon";

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

const Accordion = ({ icon, title, className, linkAccord }: IAccordion) => {
  return (
    <div>
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
      <div className="flex flex-col justify-center gap-x-2 text-center gap-y-3">
        {linkAccord &&
          linkAccord.length > 0 &&
          linkAccord.map((linkChild) => <span>{linkChild?.title}</span>)}
      </div>
    </div>
  );
};

export default Accordion;
