import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { NavigateName } from "../../utils/enum";
import { MusicItemType } from "./index";
import MusciItem from "./MusicItem";

interface MusicVideoProps {}

export default function MusicVideo(props: MusicVideoProps) {
  const data = useSelector((state: any) => state.music.dataMusic);

  // data Vỉdeo
  const dataVideo = data?.video;

  // navigate

  return (
    <div>
      <div className="flex gap-x-[18px] items-center mb-4">
        {dataVideo &&
          dataVideo.length > 0 &&
          dataVideo.slice(0, 2).map((item: MusicItemType) => (
            <div className="flex-1" key={v4()}>
              <MusciItem
                data={item}
                classNames="h-[210px]"
                musicTime
                heading="abc"
                isNavigate={NavigateName.Video}
                author={
                  item.artists &&
                  item.artists.map((art: any) => art.name).join(" , ")
                }
              ></MusciItem>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-4 gap-x-[18px] items-center">
        {dataVideo &&
          dataVideo.length &&
          dataVideo
            .slice(3, 7)
            .map((item: MusicItemType) => (
              <MusciItem
                key={v4()}
                data={item}
                classNames="h-[120px]"
                heading="abc"
                musicTime
                isNavigate={NavigateName.Video}
                author={
                  item.artists &&
                  item.artists.map((art: any) => art.name).join(" , ")
                }
              ></MusciItem>
            ))}
      </div>
    </div>
  );
}
