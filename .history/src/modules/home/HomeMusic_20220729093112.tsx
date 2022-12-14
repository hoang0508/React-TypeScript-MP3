import * as React from "react";
import { v4 } from "uuid";
import { Button } from "../../components/button";
import { IconDownLoad } from "../../components/icon";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../../redux/MusicSlice";

interface HomeMusicProps {
  list: string;
  children?: any;
}

export default function HomeMusic({ list, children }: HomeMusicProps) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Fetchdata());
  }, [dispatch]);
  const data = useSelector((state: any) => state.music.dataMusic);
  const [musicList, setMusicList] = React.useState<any[]>([]);
  console.log(data?.songs?.top100_VN);

  React.useEffect(() => {
    switch (list) {
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
    list,
  ]);
  console.log(musicList[0]?.name.toUpperCase());
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
              {/* <span className="">{musicList[0]?.name.toUpperCase()} - </span> */}
              <span>C???p nh???t v??o {date}</span>
            </div>
          </div>
          <div className="home-banner-right flex-1 flex items-center gap-x-5 justify-end">
            <Button className="w-[160px] py-2">Ph??t t???t c???</Button>
            <IconDownLoad />
          </div>
        </div>
        <div></div>
      </div>
      {children}
    </div>
  );
}
