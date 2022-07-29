import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";

export interface HomeMusicProps {}

export default function HomeMusic(props: HomeMusicProps) {
  const [musicList, setMusicList] = React.useState<any[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: apiKey,
      });
      setMusicList(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className=""></div>
    </div>
  );
}
