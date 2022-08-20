import * as React from "react";

interface IFormGroupProps {
  children: any;
}

export default function FormGroup({ children }: IFormGroupProps) {
  return <div className="text-field mb-3">{children}</div>;
}
