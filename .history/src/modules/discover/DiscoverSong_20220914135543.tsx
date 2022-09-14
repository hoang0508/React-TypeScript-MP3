import * as React from "react";
import { useSelector } from "react-redux";
import GridLayout from "../../components/common/GridLayout";

export interface IDiscoverSongProps {}

export default function DiscoverSong(props: IDiscoverSongProps) {
  const { dataExporeSPV } = useSelector((state: any) => state.discover);

  if (dataExporeSPV?.status !== "success") return null;

  const { data } = dataExporeSPV;
  console.log(
    "🚀 ~ file: DiscoverSong.tsx ~ line 17 ~ DiscoverSong ~ data",
    data
  );
  return <GridLayout>page</GridLayout>;
}
