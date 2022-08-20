import * as React from "react";

interface ILabelProps {
  children?: any;
  name: string;
  className?: string;
}

export default function Label({ children, name, className = "" }: ILabelProps) {
  return (
    <label className={`${className} mb-3 inline-block `} htmlFor={name}>
      {children}
    </label>
  );
}
