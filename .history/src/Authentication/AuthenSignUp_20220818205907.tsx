import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IconClose } from "../components/icon";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { setIsShowSignUp } from "../redux/AuthenSlice";

const AuthenSignUp = () => {
  // useSelector isShowSignUp
  const { isShowSignUp } = useSelector((state: any) => state.authen);
  // dispatch
  const dispatch = useDispatch();
  const handleCloseAuthen = () => {
    dispatch(setIsShowSignUp(false));
  };

  // hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  return (
    <>
      {isShowSignUp && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-bgColor max-w-[480px] w-full rounded shadow-lg">
            <div className="py-3 border-b border-b-borderColor flex justify-center items-center relative">
              <h3 className="font-bold text-center">Đăng ký</h3>
              <span
                className="absolute right-2 cursor-pointer"
                onClick={() => handleCloseAuthen()}
              >
                <IconClose />
              </span>
            </div>
            <div className="my-7 px-4">
              <div className="text-field">
                <Label className="bg-bgColor" name="name">
                  Tên của bạn
                </Label>
                <Input
                  name="name"
                  control={control}
                  type="text"
                  placeholder="Mời bạn nhập tên..."
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthenSignUp;
