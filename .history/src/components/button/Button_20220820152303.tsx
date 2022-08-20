import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
}

export default function Button({
  children,
  className = "",
  type,
  isLoading,
}: Buttonprops) {
  return (
    <button
      type={type}
      className={`font-medium flex justify-center items-centercursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
