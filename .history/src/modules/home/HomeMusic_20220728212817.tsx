import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";
import { useUID } from "react-uid";
export interface HomeMusicProps {}

export default function HomeMusic(props: HomeMusicProps) {
  const [musicList, setMusicList] = React.useState<any[]>([]);
  const id = useUID();
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: apiKey,
      });
      setMusicList(response.data);
    };
    fetchData();
  }, []);
  console.log(musicList);
  return (
    <div>
      <div className="">
        {musicList &&
          musicList.length > 0 &&
          musicList.map((music) => (
            // <span key={id}>{music.songs.top100_VN?.name}</span>
            <></>
          ))}
      </div>
    </div>
  );
}
