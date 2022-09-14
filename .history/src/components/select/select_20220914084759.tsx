import * as React from "react";

export interface ISelectProps {
  children: any;
  className?: string;
}

export default function Select({ children, className = "" }: ISelectProps) {
  return (
    <select className={`${className} text-black border-0`}>{children}</select>
  );
}
