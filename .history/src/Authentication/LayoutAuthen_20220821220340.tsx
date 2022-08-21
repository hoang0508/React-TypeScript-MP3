import * as React from "react";
import { IconClose } from "../components/icon";

interface ILayoutAuthenProps {
  children: any;
  heading: string;
  onClick: () => void;
}

export default function LayoutAuthen({
  children,
  heading,
  onClick,
}: ILayoutAuthenProps) {
  return (
    <div className="bg-bgColor  rounded shadow-lg">
      <div className="py-3 border-b border-b-borderColor flex justify-center items-center relative">
        <h3 className="font-bold text-center">{heading}</h3>
        <span className="absolute right-2 cursor-pointer" onClick={onClick}>
          <IconClose />
        </span>
      </div>
      {children}
    </div>
  );
}
