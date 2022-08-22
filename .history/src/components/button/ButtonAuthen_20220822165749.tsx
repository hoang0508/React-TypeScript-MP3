import * as React from "react";
import Button from "./Button";

interface IButtonAuthenProps {
  children: string;
  isLoading: boolean;
}

export default function ButtonAuthen({
  children,
  isLoading,
}: IButtonAuthenProps) {
  return (
    <Button
      type="submit"
      isLoading={isLoading}
      className="bg-gradient-to-r from-[#2F80ED,#00AEEF] w-full py-3 mt-4 rounded"
    >
      {children}
    </Button>
  );
}
