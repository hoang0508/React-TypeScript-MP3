import { useEffect, useRef, useState } from "react";

export default function useClickOutSide() {
  const [show, setShow] = useState(true);
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
