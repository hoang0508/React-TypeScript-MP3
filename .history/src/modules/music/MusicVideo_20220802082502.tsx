import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "./index";
import MusciItem from "./MusicItem";

interface MusicVideoProps {}

export default function MusicVideo(props: MusicVideoProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: MusicVideo.tsx ~ line 11 ~ MusicVideo ~ data", data);

  // data Vỉdeo
  const dataVideo = data?.video;

  // const
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
                author={
                  item.artists &&
                  item.artists.map((art: any) => art.name).join(" , ")
                }
              ></MusciItem>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-4 items-center"></div>
    </div>
  );
}
