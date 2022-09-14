import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";

export interface IDiscoverSongProps {}

export default function DiscoverSong(props: IDiscoverSongProps) {
  const { dataExporeSPV } = useSelector((state: any) => state.discover);

  if (dataExporeSPV?.status !== "success") return null;

  const { dataDisCSong } = dataExporeSPV;
  console.log(
    "🚀 ~ file: DiscoverSong.tsx ~ line 13 ~ DiscoverSong ~ dataDisCSong",
    dataDisCSong
  );

  return (
    <GridLayout>
      {dataDisCSong &&
        dataDisCSong.length > 0 &&
        dataDisCSong.map((item: MusicItemType) => (
          <MusciItem key={v4()} data={item}></MusciItem>
        ))}
    </GridLayout>
  );
}
