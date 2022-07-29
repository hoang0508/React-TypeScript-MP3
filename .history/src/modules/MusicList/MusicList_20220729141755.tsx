import * as React from "react";
import { v4 } from "uuid";
import { IconDots } from "../../components/icon";
import "./MusicList.scss";
interface MusicListProps {
  data: any;
}

export default function MusicList({ data }: MusicListProps) {
  return (
    <div className="w-[800px] mx-auto cursor-pointer">
      {data &&
        data.length > 0 &&
        data.map((data: any, index: number) => (
          <div className="flex items-center gap-x-2 mb-2" key={v4()}>
            <span className="w-[30px] h-[30px] flex items-center justify-center bg-bgColor2 rounded-full text-text2 font-medium">
              {index + 1}
            </span>
            <div className="flex items-center justify-between bg-bgColor2 w-full py-3 px-4 music-list">
              <div className="flex items-center  gap-x-3 ">
                <div>
                  <img
                    src={data.avatar}
                    alt=""
                    className="w-10 h-10 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="text-text1 font-medium">{data.title}</h3>
                  <p className="text-text2 font-normal">{data.creator}</p>
                </div>
              </div>
              <div className="music-dot--active">
                <IconDots />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
