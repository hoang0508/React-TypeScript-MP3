import * as React from "react";
import { IconCheck } from "../icon";

interface ICheckboxProps {
  name: string;
}

export default function Checkbox({ name }: ICheckboxProps) {
  return (
    <>
      <div>
        <input type="checkbox" name={name} id="" className="hidden" />
        <span>
          <IconCheck></IconCheck>
        </span>
      </div>
    </>
  );
}
