import React from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { setIsShowMore } from "../../redux/GlobalSlice";
export interface ILyricWordProps {}

export default function LyricWord(props: ILyricWordProps) {
  const { dataShareLyricSong } = useSelector((state: any) => state.lyric);
  const { isShowMore } = useSelector((state: any) => state.global);

  const dispatch = useDispatch();

  if (!dataShareLyricSong?.lyric) return null;

  const { userNameUpload, lyric } = dataShareLyricSong;

  // lyric parse html
  const l = parse(`${lyric}`);

  const handleCoppyLink = () => {
    navigator.clipboard.writeText(`${l}`);
  };

  return (
    <div className="bg-bgColor2 py-4 px-6">
      <div className="flex justify-between items-center border-b border-borderColor pb-4">
        <div>
          <h3 className="mb-3 text-[14px] text-text1 font-bold">Lời bài hát</h3>
          <span className="text-text2 text-[13px] font-medium">
            Lời đăng bởi: {userNameUpload}
          </span>
        </div>
        <div className="cursor-pointer" onClick={() => handleCoppyLink()}>
          Sao chép
        </div>
      </div>
      <div
        className={`${
          isShowMore ? "custom-text--lyric" : ""
        } pt-4 leading-6 text-text2`}
      >
        {l}
      </div>
      <span
        className="text-text2 font-semibold pt-2 cursor-pointer inline-block"
        onClick={() => dispatch(setIsShowMore(!isShowMore))}
      >
        Xem thêm
      </span>
    </div>
  );
}
