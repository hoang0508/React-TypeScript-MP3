import { yupResolver } from "@hookform/resolvers/yup";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import useValueToggle from "../hooks/useValueToggle";
import { setIsShowSignIn } from "../redux/AuthenSlice";
import LayoutAuthen from "./LayoutAuthen";
import * as yup from "yup";
import ButtonAuthen from "../components/button/ButtonAuthen";
import { Link } from "react-router-dom";
import Checkbox from "../components/checkbox/Checkbox";
import IconEyeToggle from "../components/icon/IconEyeToggle";
import FormGroup from "../components/common/FormGroup";
import { Label } from "../components/label";
import { Input } from "../components/input";
import { Dialog } from "@material-ui/core";

export interface IAuthenSignInProps {}

interface IFormInputs {
  email: any;
  password: any;
}

// validation yup react hook form
const schema = yup
  .object({
    email: yup
      .string()
      .email("Bạn cần nhập đúng địa chỉ email!")
      .required("Email không được để trống!!"),
    password: yup
      .string()
      .min(8, "Mật khẩu cần 8 kí tự")
      .required("Mật khẩu không được để trống!!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, 1 chữ in hoa, One Lowercase 1 chữ in thường, 1 số và 1 kí tự đặc biệt"
      ),
  })
  .required();

export default function AuthenSignIn(props: IAuthenSignInProps) {
  // useSelector isShowSignUp
  const { isShowSignIn } = useSelector((state: any) => state.authen);
  console.log(
    "🚀 ~ file: AuthenSignIn.tsx ~ line 46 ~ AuthenSignIn ~ isShowSignIn",
    isShowSignIn
  );

  //react hook form
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleAuthSignIn = (values: IFormInputs) => {
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

  // error form
  const { email, password } = errors;
  //
  // dispatch
  const dispatch = useDispatch();
  // handle Close
  const handleCloseSignIn = () => {
    dispatch(setIsShowSignIn(false));
  };
  return (
    // <Dialog
    //   onClose={handleCloseSignIn}
    //   open={isShowSignIn}
    //   className="cursor-pointer"
    // >
    //   <LayoutAuthen heading="Đăng nhập" onClick={handleCloseSignIn}>
    //     <form onSubmit={handleSubmit(handleAuthSignIn)} className="py-7 px-4">
    //       <FormGroup>
    //         <Label className="bg-bgColor" name="email">
    //           Email
    //         </Label>
    //         <Input
    //           name="email"
    //           control={control}
    //           type="text"
    //           placeholder="Email của bạn..."
    //           error={email?.message}
    //         />
    //       </FormGroup>
    //       <FormGroup>
    //         <Label className="bg-bgColor" name="email">
    //           Mật khẩu
    //         </Label>
    //         <Input
    //           name="password"
    //           control={control}
    //           type={isShowTogglePassowrd ? "text" : "password"}
    //           placeholder="Đặt mật khẩu..."
    //           error={password?.message}
    //         >
    //           <span className="cursor-pointer">
    //             <IconEyeToggle
    //               open={isShowTogglePassowrd}
    //               onCick={() => handleTogglePassword()}
    //             ></IconEyeToggle>
    //           </span>
    //         </Input>
    //       </FormGroup>
    //       <div className="flex justify-start gap-x-3 items-center">
    //         <Checkbox
    //           name="term"
    //           checked={acceptTerm}
    //           onClick={handleToggleTerm}
    //         >
    //           <p className="text-xs">
    //             {" "}
    //             Tôi đã đọc và đồng ý các{" "}
    //             <Link
    //               to={"/"}
    //               className="uppercase text-primary text-sm font-medium"
    //             >
    //               Thoả thuận sử dụng
    //             </Link>
    //           </p>
    //         </Checkbox>
    //       </div>
    //       <ButtonAuthen>Đăng nhập</ButtonAuthen>
    //     </form>
    //   </LayoutAuthen>
    // </Dialog>
    <>kkk</>
  );
}
