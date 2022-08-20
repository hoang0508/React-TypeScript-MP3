import * as React from "react";
import IconCheck from "../icon/IconCheck";

interface ICheckboxProps {
  name: string;
}

export default function Checkbox(props: ICheckboxProps) {
  return (
    <div>
      <div>
        <input type="checkbox" name="" id="" className="hidden" />
        <span>
          <IconCheck></IconCheck>
        </span>
      </div>
    </div>
  );
}
