import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setIsShow } from "../redux/SearchSlice";

export default function useClickOutSide() {
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e: any) => {
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
        dispatch(setIsShow(false));
      }
    };
    document.body.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, [dispatch]);
  return {
    nodeRef,
  };
}
