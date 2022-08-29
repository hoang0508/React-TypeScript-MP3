import { getHome } from "nhaccuatui-api-full/dist";
import * as React from "react";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";
import { NavigateName } from "../../utils/type";

export interface VideoListProps {}

export default function VideoList(props: VideoListProps) {
  const [dataVideoList, setDataVideoList] = React.useState<[]>([]);
  React.useEffect(() => {
    (async () => {
      const data = await getHome();
      const videoList = data?.video;
      setDataVideoList(videoList);
    })();
  }, []);
  return (
    <div className="flex flex-col gap-y-3">
      {dataVideoList &&
        dataVideoList.length > 0 &&
        dataVideoList.map((item: MusicItemType) => (
          <MusciItem
            key={v4()}
            data={item}
            classNames="h-[170px]"
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
  );
}
