import * as React from "react";

interface Buttonprops {
  children: any;
  className?: string;
  type: "button" | "submit" | "reset";
  isLoading?: boolean;
  onClick?: () => void;
}

export default function Button({
  children,
  className = "",
  type,
  isLoading,
  onClick,
}: Buttonprops) {
  const child = !!isLoading ? (
    <div className="w-6 h-6 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
  ) : (
    children
  );
  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-medium flex justify-center items-center cursor-pointer ${className}`}
    >
      {child}
    </button>
  );
}
