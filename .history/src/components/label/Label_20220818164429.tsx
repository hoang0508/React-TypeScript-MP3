import * as React from "react";

interface ILabelProps {
  children?: any;
  name: string;
}

export default function Label({ children, name }: ILabelProps) {
  return (
    <label className="" htmlFor={name}>
      {children}
    </label>
  );
}
