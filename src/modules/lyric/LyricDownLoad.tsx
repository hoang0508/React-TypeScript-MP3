import * as React from "react";
import { useSelector } from "react-redux";
import ShareDown from "../../components/common/ShareDown";

export interface ILyricDownLoadProps {}

export default function LyricDownLoad(props: ILyricDownLoadProps) {
  const { dataShareLyricSong } = useSelector((state: any) => state.lyric);
  if (!dataShareLyricSong?.userNameUpload) return null;

  const { userNameUpload } = dataShareLyricSong;
  return (
    <div className="flex justify-between items-center bg-bgColor2 py-4 px-6 mb-1">
      <div className="flex-1 flex gap-x-2 items-center">
        <div>
          <img
            src="/img-error.png"
            alt=""
            className="w-[38px] h-[38px] object-cover rounded-full"
          />
        </div>
        <div>
          <span className="inline-block mb-1">Cung cấp bởi:</span>
          <h3 className="uppercase text-[#2daaed] font-bold">
            {userNameUpload.split("_").join(" ").toUpperCase()}
          </h3>
        </div>
      </div>
      <ShareDown></ShareDown>
    </div>
  );
}
