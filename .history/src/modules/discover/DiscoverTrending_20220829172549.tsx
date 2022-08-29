import * as React from "react";
import HeadingLine from "../../components/common/Headingline";
import { IconShare } from "../../components/icon";

export interface IDiscoverTrendingProps {}

export default function DiscoverTrending(props: IDiscoverTrendingProps) {
  return (
    <>
      <div className="bg-bgColor2">
        <div className="flex items-center justify-between mb-9">
          <div className="flex items-center gap-x-4">
            <HeadingLine className="mb-0">Nghệ Sỹ Trending</HeadingLine>
            <span>Cập nhật ngày: {new Date().toLocaleDateString("vi-VI")}</span>
          </div>
          <IconShare />
        </div>
      </div>
    </>
  );
}
