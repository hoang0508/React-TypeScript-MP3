import * as React from "react";
import { useController } from "react-hook-form";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  children?: any;
  control: any;
  error: string | any;
}

export default function Input({
  name,
  children,
  type,
  control,
  placeholder,
  error = "",
}: InputProps) {
  const { field } = useController({
    defaultValue: "",
    name,
    control,
  });
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        {...field}
        className="w-full py-4 px-3 border border-borderColor bg-transparent rounded-lg"
      />
      {error && error.length > 0 && (
        <span className="absolute top-2/4 -translate-y-2/4 left-4 font-medium text-error">
          {error}
        </span>
      )}
      {children && (
        <span className="absolute right-4 top-2/4 -translate-y-2/4">
          {children}
        </span>
      )}
    </div>
  );
}
