import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";
import { useUID } from "react-uid";

interface HomeMusicProps {
  list: string;
}

export default function HomeMusic({ list }: HomeMusicProps) {
  console.log(list);
  const [musicList, setMusicList] = React.useState<any[]>([]);
  const id = useUID();
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
  return (
    <div className="home">
      <div className="flex items-center justify-center gap-x-5 my-5">
        {musicList &&
          musicList.length > 0 &&
          musicList.map((music) => (
            <span className="text-sm font-medium" key={id}>
              {music?.name}
            </span>
          ))}
      </div>
      <div className="flex">
        <div className="home-banner">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          corporis optio dolore, ut sequi quasi, nesciunt atque quia odit
          asperiores iure voluptatem voluptates. Aperiam temporibus cupiditate,
          vitae inventore cum sed.
        </div>
        <div></div>
      </div>
    </div>
  );
}
