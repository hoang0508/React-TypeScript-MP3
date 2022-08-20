import { useState } from "react";

export default function useValueToggle() {
  const [valueToggle, setValueToggle] = useState<boolean>(false);

  const handleValueToggle = () => {
    setValueToggle(!valueToggle);
  };

  return {
    valueToggle,
    handleValueToggle,
  };
}
