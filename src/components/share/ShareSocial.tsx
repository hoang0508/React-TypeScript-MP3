import * as React from "react";
import { useSelector } from "react-redux";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { FacebookShareButton } from "react-share";
import { toast } from "react-toastify";
import { Button } from "../button";
import Modal from "../modal/Modal";

export interface IShareSocialProps {}

export default function ShareSocial(props: IShareSocialProps) {
  const { isShowModal } = useSelector((state: any) => state.music);
  const url: any = window.location.href;

  const handleCoppyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Coppy successfully!!");
  };
  return (
    <>
      <Modal
        title="Chia sẻ"
        className={`${isShowModal ? "modal-show" : "modal-close"}`}
      >
        <FacebookShareButton url={url}>
          <Button
            className="button-share button-share--fb w-full"
            type="button"
          >
            <FaFacebookF />
            <span>Facebook</span>
          </Button>
        </FacebookShareButton>

        <Button
          className="button-share button-share--link"
          type="button"
          onClick={() => handleCoppyLink()}
        >
          <AiOutlineLink />
          <span>Sao chép link</span>
        </Button>
      </Modal>
    </>
  );
}
