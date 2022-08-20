import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { IconClose } from "../components/icon";
import { Input } from "../components/input";
import { Label } from "../components/label";

const AuthenSignUp = () => {
  const { isShowSignUp } = useSelector((state: any) => state.authen);

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
            <div className="py-2  border-b border-b-borderColor flex justify-center items-center">
              <h3 className="font-bold text-center">Đăng ký</h3>
              <span>
                <IconClose />
              </span>
            </div>
            <div className="my-6 px-4">
              <div className="text-field">
                <Label name="name">Tên đăng nhập</Label>
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
