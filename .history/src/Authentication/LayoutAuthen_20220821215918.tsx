import * as React from "react";
import { IconClose } from "../components/icon";

interface ILayoutAuthenProps {
  children: any;
  heading: string;
  onClick: () => void;
  visible?: boolean;
}

export default function LayoutAuthen({
  children,
  heading,
  visible,
  onClick,
}: ILayoutAuthenProps) {
  return (
    <div className="flex justify-center items-center bg-[rgba(0,0,0,0.6)]">
      <div className="bg-bgColor max-w-[480px] w-full rounded shadow-lg">
        <div className="py-3 border-b border-b-borderColor flex justify-center items-center relative">
          <h3 className="font-bold text-center">{heading}</h3>
          <span className="absolute right-2 cursor-pointer" onClick={onClick}>
            <IconClose />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
