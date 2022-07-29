import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";
import { useUID } from "react-uid";
export interface HomeMusicProps {}

let h: string = `top100_VN`;
export default function HomeMusic(props: HomeMusicProps) {
  const [musicList, setMusicList] = React.useState<any[]>([]);
  const id = useUID();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: apiKey,
      });
      setMusicList(response.data.songs.h);
    };
    fetchData();
  }, []);
  console.log(musicList);
  return (
    <div>
      <div className="">
        {musicList &&
          musicList.length > 0 &&
          musicList.map((music) => <span key={id}>{music?.name}</span>)}
      </div>
    </div>
  );
}
