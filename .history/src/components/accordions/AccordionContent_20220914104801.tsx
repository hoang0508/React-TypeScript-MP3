import React from "react";
import { NavLink } from "react-router-dom";
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
      className={`flex flex-col justify-center gap-x-2 text-center gap-y-3  ${
        isActiceAcc ? "accordion-content--active" : "accordion-content"
      }`}
    >
      {linkAccord &&
        linkAccord.length > 0 &&
        linkAccord.map((linkChild) => (
          <NavLink to={linkChild?.to} key={v4()}>
            {linkChild?.title}
          </NavLink>
        ))}
    </div>
  );
};

export default AccordionContent;
