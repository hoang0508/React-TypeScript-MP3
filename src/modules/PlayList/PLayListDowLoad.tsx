import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconDownLoad, IconShare } from "../../components/icon";
import IconCloud from "../../components/icon/IconCloud";
import { setIsShowModal } from "../../redux/MusicSlice";

export interface PlayListDownLoadProps {}

export default function PlayListDownLoad(props: PlayListDownLoadProps) {
  const { dataPlayList: data, isShowModal } = useSelector(
    (state: any) => state.music
  );
  const dispatch = useDispatch();
  if (!data?.playlist) return null;
  const { uploadBy } = data?.playlist;

  const handleShowModal = () => {
    dispatch(setIsShowModal(!isShowModal));
  };

  console.log(isShowModal);
  return (
    <div className="bg-bgColor2 flex items-center justify-center py-3 px-6 mb-11">
      <div className="flex-1 flex gap-x-2 items-center">
        <div>
          <img
            src={
              uploadBy?.avatarUrl ? uploadBy?.avatarUrl : "/avatar-playList.png"
            }
            alt=""
            className="w-[38px] h-[38px] object-cover rounded-full"
          />
        </div>
        <div>
          <span className="inline-block mb-1">Tạo bởi:</span>
          <h3 className="uppercase text-[#2daaed] font-bold">
            {uploadBy?.fullName}
          </h3>
        </div>
      </div>
      <div className="flex-1 flex justify-end gap-x-4 text-text2 cursor-pointer">
        <IconCloud />
        <IconDownLoad />
        <IconShare onClick={() => handleShowModal()} />
      </div>
    </div>
  );
}
