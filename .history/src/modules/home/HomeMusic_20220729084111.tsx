import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";
import { v4 } from "uuid";
import { Button } from "../../components/button";
import { IconDownLoad } from "../../components/icon";
import { NavLink } from "react-router-dom";
import encodeUtf8 from "encode-utf8";

interface HomeMusicProps {
  list: string;
}

export default function HomeMusic({ list }: HomeMusicProps) {
  console.log(list);
  const [musicList, setMusicList] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: apiKey,
      });
      switch (list) {
        case "top100_VN":
          setMusicList(response.data?.songs?.top100_VN);
          break;
        case "top100_AM":
          setMusicList(response.data?.songs?.top100_AM);
          break;
        case "top100_CA":
          setMusicList(response.data?.songs?.top100_CA);
          break;
        case "top100_KL":
          setMusicList(response.data?.songs?.top100_KL);
          break;
        default:
          break;
      }
    };
    fetchData();
  }, [list]);
  console.log(musicList);
  const date = new Date().toLocaleDateString("vi-VI");
  return (
    <div className="home">
      <div className="flex items-center justify-center gap-x-5 mt-5 mb-11">
        {musicList &&
          musicList.length > 0 &&
          musicList.map((music) => (
            <NavLink
              to={`${music?.name}`}
              className="text-sm font-medium"
              key={v4()}
            >
              {music?.name}
            </NavLink>
          ))}
      </div>
      <div className="flex max-w-[850px] w-full">
        <div className="home-banner flex justify-between items-center w-full py-4 px-8">
          <div className="home-banner-left flex-1">
            <h3 className="mb-2 text-4xl uppercase font-semibold">Top 100</h3>
            <div>
              <span className="">{musicList[0]?.name.toUpperCase()} - </span>
              <span>Cập nhật vào {date}</span>
            </div>
          </div>
          <div className="home-banner-right flex-1 flex items-center gap-x-5 justify-end">
            <Button className="w-[160px] py-2">Phát tất cả</Button>
            <IconDownLoad />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
