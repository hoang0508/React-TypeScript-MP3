import * as React from "react";

interface IFormGroupProps {
  children: any;
}

export default function FormGroup({ children }: IFormGroupProps) {
  return <div>{children}</div>;
}
