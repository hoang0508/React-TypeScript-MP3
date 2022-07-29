import * as React from "react";
import { v4 } from "uuid";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fetchdata } from "../../redux/MusicSlice";
import HomeBanner from "./HomeBanner";

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
      <div className="max-w-[850px] w-full">
        <HomeBanner musicList={musicList}></HomeBanner>
        {children}
      </div>
    </div>
  );
}
