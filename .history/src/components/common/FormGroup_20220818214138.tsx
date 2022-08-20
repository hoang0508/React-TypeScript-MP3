import * as React from "react";

interface IFormGroupProps {
  children: any;
}

export default function FormGroup({ children }: IFormGroupProps) {
  return (
    <div className="text-field last-of-type:last:mb-0 mb-6">{children}</div>
  );
}
