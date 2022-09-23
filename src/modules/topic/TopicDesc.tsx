import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IconArrowDown } from "../../components/icon";

export interface ITopicDescProps {}

export default function TopicDesc(props: ITopicDescProps) {
  const { dataTopic } = useSelector((state: any) => state.music);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  if (!dataTopic?.topic) return null;
  const { description } = dataTopic?.topic;

  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="mb-10">
      <p className={`text-sm text-text2 ${isShowMore ? "" : "custom-text"}`}>
        {description}
      </p>
      <div
        className="text-[13px] text-text2 font-bold inline-flex items-center gap-x-1 cursor-pointer "
        onClick={() => handleShowMore()}
      >
        <IconArrowDown className="w-3 h-3" /> <span>Xem thêm</span>
      </div>
    </div>
  );
}
