import React from "react";

interface ILinkAccordChild {
  title: string;
  to: string;
}

interface IAccordionContent {
  linkAccord: ILinkAccordChild[];
}

const AccordionContent = ({ linkAccord }: IAccordionContent) => {
  return (
    <div className="flex flex-col justify-center gap-x-2 text-center gap-y-3">
      {linkAccord &&
        linkAccord.length > 0 &&
        linkAccord.map((linkChild) => <span>{linkChild?.title}</span>)}
    </div>
  );
};

export default AccordionContent;
