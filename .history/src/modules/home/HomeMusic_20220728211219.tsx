import * as React from "react";
import { apiKey } from "../../apis/apiKey";
import { MusicApi } from "../../apis/MusicApi";

export interface HomeMusicProps {}

export default function HomeMusic(props: HomeMusicProps) {
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await MusicApi.getAll({
        fbclid: apiKey,
      });
      console.log(response.data);
    };
    fetchData();
  }, []);
  return <div></div>;
}
