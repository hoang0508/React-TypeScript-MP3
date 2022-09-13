import React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";

interface ILinkAccordChild {
  title: string;
  to: string;
}

interface IAccordionContent {
  linkAccord: ILinkAccordChild[];
}

const AccordionContent = ({ linkAccord }: IAccordionContent) => {
  const { isActiceAcc } = useSelector((state: any) => state.accordion);
  return (
    <div
      className={`flex flex-col justify-center gap-x-2 text-center gap-y-3 accordion-content ${
        isActiceAcc ? "accordion-content--active" : "accordion-content"
      }`}
    >
      {linkAccord &&
        linkAccord.length > 0 &&
        linkAccord.map((linkChild) => (
          <span key={v4()}>{linkChild?.title}</span>
        ))}
    </div>
  );
};

export default AccordionContent;
