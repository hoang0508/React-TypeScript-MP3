import * as React from "react";
import { useController } from "react-hook-form";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  children: any;
  control: any;
}

export default function Input({
  name,
  children,
  type,
  control,
  placeholder,
}: InputProps) {
  const { field } = useController({
    defaultValue: "",
    name,
    control,
  });
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={name}
      {...field}
      className="w-full py-3 px-3 border border-borderColor bg-transparent rounded-lg"
    />
  );
}
