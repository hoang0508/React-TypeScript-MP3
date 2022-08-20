import React from "react";
import { useSelector } from "react-redux";
import { IconClose } from "../components/icon";

const AuthenSignUp = () => {
  const { isShowSignUp } = useSelector((state: any) => state.authen);
  console.log(
    "🚀 ~ file: AuthenSignUp.tsx ~ line 7 ~ AuthenSignUp ~ isShowSignUp",
    isShowSignUp
  );
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center">
      <div className="bg-bgColor max-w-[480px] w-full">
        <div className="py-2 border border-b border-b-borderColor">
          <h3 className="font-bold text-center">Đăng ký</h3>
          <span>
            <IconClose />
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthenSignUp;
