import { getHome } from "nhaccuatui-api-full/dist";
import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "../music/MusicItem";

export interface VideoListProps {}

export default function VideoList(props: VideoListProps) {
  const [dataVideoList, setDataVideoList] = React.useState<[]>([]);
  React.useEffect(() => {
    (async () => {
      const data = await getHome();
      const videoList = data?.video;
      setDataVideoList(videoList);
      console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
    })();
  }, []);
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: VideoList.tsx ~ line 7 ~ VideoList ~ data", data);
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
            author={
              item.artists &&
              item.artists.map((art: any) => art.name).join(" , ")
            }
          ></MusciItem>
        ))}
    </div>
  );
}
