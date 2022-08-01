import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "./index";
import MusciItem from "./MusicItem";

interface MusicVideoProps {}

export default function MusicVideo(props: MusicVideoProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  // console.log("🚀 ~ file: MusicVideo.tsx ~ line 8 ~ MusicVideo ~ data", data);
  const dataVideo = data?.video;
  console.log(
    "🚀 ~ file: MusicVideo.tsx ~ line 10 ~ MusicVideo ~ dataVideo",
    dataVideo
  );
  return (
    <div>
      <div className="flex gap-x-[18px] items-center">
        {dataVideo &&
          dataVideo.length > 0 &&
          dataVideo.slice(0, 2).map((item: MusicItemType) => (
            <div className="flex-1" key={v4()}>
              <MusciItem
                data={item}
                classNames="h-[210px]"
                musicTime
                heading="abc"
              ></MusciItem>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-4 items-center"></div>
    </div>
  );
}
