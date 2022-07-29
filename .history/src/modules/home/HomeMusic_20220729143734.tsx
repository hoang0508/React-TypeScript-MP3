import * as React from "react";
import { v4 } from "uuid";
import { useSelector } from "react-redux";
import HomeBanner from "./HomeBanner";
import MusicList from "../MusicList/MusicList";
interface HomeMusicProps {
  text: string;
  children?: any;
}

export default function HomeMusic({ text, children }: HomeMusicProps) {
  const data = useSelector((state: any) => state.music.dataMusic);
  const [musicList, setMusicList] = React.useState<any[]>([]);
  React.useEffect(() => {
    switch (text) {
      case "top100_VN":
        setMusicList(data?.songs?.top100_VN);
        break;
      case "top100_AM":
        setMusicList(data?.songs?.top100_AM);
        break;
      case "top100_CA":
        setMusicList(data?.songs?.top100_CA);
        break;
      case "top100_KL":
        setMusicList(data?.songs?.top100_KL);
        break;
      default:
        break;
    }
  }, [
    data?.songs?.top100_AM,
    data?.songs?.top100_CA,
    data?.songs?.top100_KL,
    data?.songs?.top100_VN,
    text,
  ]);
  // state music list item
  const [musicItem, setMusicItem] = React.useState<string[]>([]);
  const handleClickMusic = (data: any) => {
    setMusicItem(data?.songs);
  };
  console.log(data?.songs?.top100_VN[0]);
  // React.useEffect(() => {
  //   setMusicItem(data.songs.top100_VN?.songs);
  // }, [data]);
  return (
    <div className="home">
      <div className="flex items-center justify-center gap-x-5 mt-5 mb-11">
        {musicList &&
          musicList.length > 0 &&
          musicList.map((music) => (
            <span
              className="text-sm font-medium cursor-pointer"
              key={v4()}
              onClick={() => handleClickMusic(music)}
            >
              {music?.name}
            </span>
          ))}
      </div>
      <div className="max-w-[850px] w-full">
        <HomeBanner musicList={musicList}></HomeBanner>
        <MusicList data={musicItem}></MusicList>
      </div>
    </div>
  );
}
