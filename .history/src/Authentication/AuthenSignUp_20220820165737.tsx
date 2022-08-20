import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import Checkbox from "../components/checkbox/Checkbox";
import FormGroup from "../components/common/FormGroup";
import { IconClose } from "../components/icon";
import IconEyeToggle from "../components/icon/IconEyeToggle";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { setIsShowSignUp } from "../redux/AuthenSlice";

const AuthenSignUp = () => {
  // useSelector isShowSignUp
  const { isShowSignUp } = useSelector((state: any) => state.authen);
  // dispatch
  const dispatch = useDispatch();
  // handle Close
  const handleCloseAuthen = () => {
    dispatch(setIsShowSignUp(false));
  };

  // hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  // show password useState
  const [isShowTogglePassowrd, setIsShowTogglePassword] =
    useState<boolean>(false);
  const handleTogglePassword = () => {
    setIsShowTogglePassword(!isShowTogglePassowrd);
  };

  //
  const [acceptTerm, setAccepTerm] = useState<boolean>(false);
  console.log(
    "🚀 ~ file: AuthenSignUp.tsx ~ line 38 ~ AuthenSignUp ~ acceptTerm",
    acceptTerm
  );
  const handleToggleTerm = () => {
    setAccepTerm(!acceptTerm);
  };
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
            <div className="py-7 px-4">
              <FormGroup>
                <Label className="bg-bgColor" name="name">
                  Tên của bạn
                </Label>
                <Input
                  name="name"
                  control={control}
                  type="text"
                  placeholder="Mời bạn nhập tên..."
                />
              </FormGroup>
              <FormGroup>
                <Label className="bg-bgColor" name="email">
                  Email
                </Label>
                <Input
                  name="email"
                  control={control}
                  type="text"
                  placeholder="Mời bạn nhập email..."
                />
              </FormGroup>
              <FormGroup>
                <Label className="bg-bgColor" name="email">
                  Mật khẩu
                </Label>
                <Input
                  name="password"
                  control={control}
                  type={isShowTogglePassowrd ? "text" : "password"}
                  placeholder="Đặt mật khẩu..."
                >
                  <span className="cursor-pointer">
                    <IconEyeToggle
                      open={isShowTogglePassowrd}
                      onCick={() => handleTogglePassword()}
                    ></IconEyeToggle>
                  </span>
                </Input>
              </FormGroup>
              <div className="flex justify-start gap-x-3 items-center">
                <Checkbox
                  name="term"
                  checked={acceptTerm}
                  onClick={handleToggleTerm}
                >
                  <p className="text-xs">
                    {" "}
                    Tôi đã đọc và đồng ý các{" "}
                    <Link
                      to={"/"}
                      className="uppercase text-primary text-sm font-medium"
                    >
                      Thoả thuận sử dụng
                    </Link>
                  </p>
                </Checkbox>
              </div>
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#2F80ED,#00AEEF] w-full py-2 mt-4 rounded"
              >
                Đăng ký
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthenSignUp;
