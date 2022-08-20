import * as React from "react";
import { useDispatch } from "react-redux";
import { IconClose } from "../components/icon";
import { setIsShowSignUp } from "../redux/AuthenSlice";

interface ILayoutAuthenProps {
  children: any;
  heading: string;
}

export default function LayoutAuthen({
  children,
  heading,
}: ILayoutAuthenProps) {
  // dispatch
  const dispatch = useDispatch();
  // handle Close
  const handleCloseAuthen = () => {
    dispatch(setIsShowSignUp(false));
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.5)]">
      <div className="bg-bgColor max-w-[480px] w-full rounded shadow-lg">
        <div className="py-3 border-b border-b-borderColor flex justify-center items-center relative">
          <h3 className="font-bold text-center">{heading}</h3>
          <span
            className="absolute right-2 cursor-pointer"
            onClick={() => handleCloseAuthen()}
          >
            <IconClose />
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}
