import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../components/button";
import Checkbox from "../components/checkbox/Checkbox";
import FormGroup from "../components/common/FormGroup";
import IconEyeToggle from "../components/icon/IconEyeToggle";
import { Input } from "../components/input";
import { Label } from "../components/label";
import useValueToggle from "../hooks/useValueToggle";
import LayoutAuthen from "./LayoutAuthen";
import AuthenSocial from "./AuthenSocial";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IFormInputs {
  fullname: string;
  email: any;
  password: any;
}

const schema = yup
  .object({
    fullname: yup.string().required("Tên bạn không được để trống!!"),
    email: yup
      .string()
      .email("Bạn cần nhập đúng địa chỉ email!")
      .required("Email không được để trống!!"),
    password: yup.string().required("Mật khẩu không được để trống!!").min(8),
  })
  .required();

const AuthenSignUp = () => {
  // useSelector isShowSignUp
  const { isShowSignUp } = useSelector((state: any) => state.authen);

  // hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleAuthSignUp = (values: IFormInputs) => {
    console.log(values);
  };

  // useHook (useValueToggle)
  // show password useState
  const {
    valueToggle: isShowTogglePassowrd,
    handleValueToggle: handleTogglePassword,
  } = useValueToggle();
  // checked checkbox
  const { valueToggle: acceptTerm, handleValueToggle: handleToggleTerm } =
    useValueToggle();

  const { email, fullname, password } = errors;
  return (
    <>
      {isShowSignUp && (
        <LayoutAuthen heading="Đăng ký">
          <form onSubmit={handleSubmit(handleAuthSignUp)} className="py-7 px-4">
            <FormGroup>
              <Label className="bg-bgColor" name="name">
                Tên của bạn
              </Label>
              <Input
                name="fullname"
                control={control}
                type="text"
                placeholder="Tên của bạn..."
                error={fullname?.message}
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
                placeholder="Email của bạn..."
                error={email?.message}
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
                error={password?.message}
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
              className="bg-gradient-to-r from-[#2F80ED,#00AEEF] w-full py-3 mt-4 rounded"
            >
              Đăng ký
            </Button>
          </form>
          <div className="bg-bgColor2 px-4 py-3 flex">
            <div className="flex items-center gap-x-4 flex-1">
              <span>Đăng nhập NCT ID:</span>
              <div className="w-10 h-10 bg-bgColor2 rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src="/play-auth.png"
                  alt=""
                  className="w-8 h-8 object-cover"
                />
              </div>
            </div>
            <div className="flex items-center flex-1">
              <span className="mr-3">Hoặc</span>
              <AuthenSocial />
            </div>
          </div>
        </LayoutAuthen>
      )}
    </>
  );
};

export default AuthenSignUp;
