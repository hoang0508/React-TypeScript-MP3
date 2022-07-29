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
        setMusicHeading(data?.songs?.top100_VN[0]?.name);
        setMusicItem(data?.songs?.top100_VN[0].songs);
        break;
      case "top100_AM":
        setMusicList(data?.songs?.top100_AM);
        setMusicHeading(data?.songs?.top100_AM[0]?.name);
        setMusicItem(data?.songs?.top100_AM[0].songs);
        break;
      case "top100_CA":
        setMusicList(data?.songs?.top100_CA);
        setMusicHeading(data?.songs?.top100_CA[0]?.name);
        setMusicItem(data?.songs?.top100_VN[0].songs);
        break;
      case "top100_KL":
        setMusicList(data?.songs?.top100_KL);
        setMusicHeading(data?.songs?.top100_KL[0]?.name);
        setMusicItem(data?.songs?.top100_KL[0].songs);
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
  const [musicHeading, setMusicHeading] = React.useState([]);
  const handleClickMusic = (data: any) => {
    setMusicHeading(data?.name);
    setMusicItem(data?.songs);
  };
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
        <HomeBanner musicHeading={musicHeading}></HomeBanner>
        <MusicList data={musicItem}></MusicList>
      </div>
    </div>
  );
}
