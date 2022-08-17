import { getHome } from "nhaccuatui-api-full/dist";
import * as React from "react";
import { useSelector } from "react-redux";

export interface VideoListProps {}

export default function VideoList(props: VideoListProps) {
  React.useEffect(() => {
    (async () => {
      const data = await getHome();
      console.log("🚀 ~ file: App.tsx ~ line 15 ~ data", data);
    })();
  }, []);
  const data = useSelector((state: any) => state.music.dataMusic);
  console.log("🚀 ~ file: VideoList.tsx ~ line 7 ~ VideoList ~ data", data);
  return <div>Video</div>;
}
