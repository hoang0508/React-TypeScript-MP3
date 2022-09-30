import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowModal } from "../../redux/MusicSlice";
import { IconDownLoad, IconShare } from "../icon";
import IconCloud from "../icon/IconCloud";

export default function ShareDown() {
  const { isShowModal } = useSelector((state: any) => state.music);
  const dispatch = useDispatch();
  // show Modal share
  const handleShowModal = () => {
    dispatch(setIsShowModal(!isShowModal));
  };
  return (
    <div className="flex-1 flex justify-end gap-x-4 text-text2 cursor-pointer">
      <IconCloud />
      <IconDownLoad />
      <IconShare onClick={() => handleShowModal()} />
    </div>
  );
}
