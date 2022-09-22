import * as React from "react";
import { v4 } from "uuid";
import { MusicItemType } from "../../../utils/type";

interface IOfferVideoProps {
  dataOfferVideo: [];
}

export default function OfferVideo({ dataOfferVideo }: IOfferVideoProps) {
  return (
    <div>
      <span className="bg-bgColor2 py-3 pl-6 w-full block uppercase font-bold text-[13px]">
        Video
      </span>
      {dataOfferVideo &&
        dataOfferVideo.length > 0 &&
        dataOfferVideo.slice(0, 6).map((item: MusicItemType) => (
          <div className="flex items-center py-3 pl-6 gap-x-2" key={v4()}>
            <div className="w-8 h-8">
              <img
                src={item?.thumbnail || "/img-error.png"}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            </div>
            <span>{item?.title}</span>
          </div>
        ))}
    </div>
  );
}
