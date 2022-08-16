import * as React from "react";
import { useSelector } from "react-redux";

export interface PlayListDownLoadProps {}

export default function PlayListDownLoad(props: PlayListDownLoadProps) {
  const data = useSelector((state: any) => state.music.dataPlayList);
  if (!data?.playlist) return null;
  const { uploadBy } = data?.playlist;
  console.log(
    "🚀 ~ file: PLayListDowLoad.tsx ~ line 10 ~ PlayListDownLoad ~ uploadBy",
    uploadBy
  );
  return (
    <div className="bg-bgColor2 flex items-center justify-center py-3 px-6">
      <div className="flex-1">
        <div>
          <img
            src={
              uploadBy?.avatarUrl
                ? uploadBy?.avatarUrl
                : "./avatar-playList.png"
            }
            alt=""
          />
        </div>
        <div></div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
