import * as React from "react";

export interface ISelectProps {
  children: any;
  className?: string;
  onChange: (e: any) => void;
}

export default function Select({
  children,
  className = "",
  onChange,
}: ISelectProps) {
  return (
    <select onChange={onChange} className={`${className} text-black border-0`}>
      {children}
    </select>
  );
}
