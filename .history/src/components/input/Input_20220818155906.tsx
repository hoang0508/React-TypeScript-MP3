import * as React from "react";

export interface IInputProps {}

export default function Input(props: IInputProps) {
  return (
    <input
      type="text"
      className="w-full py-3 px-3 border border-borderColor bg-transparent rounded-lg"
    />
  );
}
