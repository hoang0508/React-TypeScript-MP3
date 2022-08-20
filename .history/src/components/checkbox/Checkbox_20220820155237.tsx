import * as React from "react";
import { IconCheck } from "../icon";

interface ICheckboxProps {
  name: string;
}

export default function Checkbox({ name }: ICheckboxProps) {
  return (
    <>
      <div className="inline-flex items-center justify-center w-5 h-5 rounded border border-borderColor cursor-pointer">
        <input type="checkbox" name={name} id="" className="hidden" />
        <span>
          <IconCheck></IconCheck>
        </span>
      </div>
    </>
  );
}
