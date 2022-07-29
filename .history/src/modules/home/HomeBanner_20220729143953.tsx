import * as React from "react";
import { Button } from "../../components/button";
import { IconDownLoad } from "../../components/icon";

interface HomeBannerProps {
  musicList: any;
}

export default function HomeBanner({ musicList }: HomeBannerProps) {
  console.log(
    "🚀 ~ file: HomeBanner.tsx ~ line 10 ~ HomeBanner ~ musicList",
    musicList
  );
  const date = new Date().toLocaleDateString("vi-VI");
  return (
    <div className="flex mb-8">
      {/* <div className="home-banner flex justify-between items-center w-full py-4 px-8">
        <div className="home-banner-left flex-1">
          <h3 className="mb-2 text-4xl uppercase font-semibold">Top 100</h3>
          <div>
            {musicList && musicList[0] && (
              <span className="">{musicList[0]?.name.toUpperCase()} - </span>
            )}
            <span>Cập nhật vào {date}</span>
          </div>
        </div>
        <div className="home-banner-right flex-1 flex items-center gap-x-5 justify-end">
          <Button className="w-[160px] py-2">Phát tất cả</Button>
          <IconDownLoad />
        </div>
      </div>
      <div></div> */}
    </div>
  );
}
