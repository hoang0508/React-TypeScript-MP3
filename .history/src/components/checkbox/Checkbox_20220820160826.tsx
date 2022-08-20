import * as React from "react";
import { IconCheck } from "../icon";

interface ICheckboxProps {
  name: string;
  onClick: () => void;
  checked: boolean;
}

export default function Checkbox({ name, onClick, checked }: ICheckboxProps) {
  return (
    <>
      <div
        className={`inline-flex items-center justify-center w-5 h-5 p-1 rounded border cursor-pointer ${
          checked ? "border-primary bg-primary" : "border-borderColor"
        }`}
        onClick={onClick}
      >
        <input type="checkbox" name={name} id="" className="hidden" />
        <span className={`${checked ? "" : "opacity-0 invisible"}`}>
          <IconCheck></IconCheck>
        </span>
      </div>
    </>
  );
}
