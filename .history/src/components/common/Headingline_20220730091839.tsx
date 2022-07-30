import * as React from "react";

interface HeadingLineProps {
  children: any;
}

export default function HeadingLine({ children }: HeadingLineProps) {
  return <h3 className="text-text1 text-2xl font-bold">{children}</h3>;
}
