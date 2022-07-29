import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
}

export default function Button({ children, className }: Buttonprops) {
  return (
    <button
      className={`border-borderColor rounded-xl py-1 px-3 border text-xs ${className}`}
    >
      {children}
    </button>
  );
}
