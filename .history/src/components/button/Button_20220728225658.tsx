import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
}

export default function Button({ children, className }: Buttonprops) {
  return (
    <button
      className={`border-borderColor rounded-xl border text-xs ${className}`}
    >
      {children}
    </button>
  );
}
