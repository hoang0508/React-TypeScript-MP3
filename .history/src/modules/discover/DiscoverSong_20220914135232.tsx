import * as React from "react";
import { useSelector } from "react-redux";
import GridLayout from "../../components/common/GridLayout";

export interface IDiscoverSongProps {}

export default function DiscoverSong(props: IDiscoverSongProps) {
  const { dataExporeSPV } = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverSongPage.tsx ~ line 21 ~ DiscoverSongPage ~ dataExporeSPV",
    dataExporeSPV
  );

  return <GridLayout>page</GridLayout>;
}
