import * as React from "react";
import { FaFacebookF } from "react-icons/fa";

export interface IAuthenSocialProps {}

export default function AuthenSocial(props: IAuthenSocialProps) {
  return (
    <div className="flex items-center gap-x-3 cursor-pointer">
      <span className="w-10 h-10 bg-bgColor2 rounded-full flex items-center justify-center">
        <FaFacebookF />
      </span>
      <span className="w-10 h-10 bg-bgColor2 rounded-full flex items-center justify-center">
        <img src="/google.png" alt="" />
      </span>
    </div>
  );
}
