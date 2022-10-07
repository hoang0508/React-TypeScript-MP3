import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import { NavigateName } from "../../utils/enum";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";

export interface IDiscoverSongProps {}

export default function DiscoverSong(props: IDiscoverSongProps) {
  const { dataExporeSPV } = useSelector((state: any) => state.discover);

  if (dataExporeSPV?.status !== "success") return null;

  const { data: dataDisCSong } = dataExporeSPV;

  return (
    <GridLayout>
      {dataDisCSong &&
        dataDisCSong.length > 0 &&
        dataDisCSong.map((item: MusicItemType) => (
          <MusciItem
            key={v4()}
            data={item}
            heading="abc"
            isNavigate={NavigateName.Lyric}
            author={
              item.artists &&
              item.artists.map((art: any) => art.name).join(" , ")
            }
          ></MusciItem>
        ))}
    </GridLayout>
  );
}
