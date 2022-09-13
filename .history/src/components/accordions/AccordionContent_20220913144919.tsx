import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { setisActiveLink } from "../../redux/AccordionSlice";

interface ILinkAccordChild {
  title: string;
  to: string;
}

interface IAccordionContent {
  linkAccord: ILinkAccordChild[];
}

const AccordionContent = ({ linkAccord }: IAccordionContent) => {
  const dispatch = useDispatch();
  const { isActiceAcc, isActiveLink } = useSelector(
    console.log("🚀 ~ file: AccordionContent.tsx ~ line 19 ~ AccordionContent ~ isActiveLink", isActiveLink)
    (state: any) => state.accordion
  );
  // const trueActive = dispatch(setisActiveLink(isActiveLink === "isActiveLink"));
  return (
    <div
      className={`flex flex-col justify-center gap-x-2 text-center gap-y-3  ${
        isActiceAcc ? "accordion-content--active" : "accordion-content"
      }`}
    >
      {linkAccord &&
        linkAccord.length > 0 &&
        linkAccord.map((linkChild) => (
          <NavLink
            to={linkChild?.to}
            key={v4()}
            // className={({ isActive }) => (isActive ? `${trueActive}` : "")}
          >
            {linkChild?.title}
          </NavLink>
        ))}
    </div>
  );
};

export default AccordionContent;
