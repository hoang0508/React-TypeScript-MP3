import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import { fetchDiscoverExplore } from "../redux/DiscoverSlice";

export interface IDiscoverSongPageProps {}

const MenuSelectSong = [
  {
    id: 1,
    title: "Mới & Hot",
    head: "hot",
  },
  {
    id: 2,
    title: "Việt Nam",
    head: "vietnam",
  },
  {
    id: 3,
    title: "Âu Mỹ",
    head: "aumy",
  },
  {
    id: 4,
    title: "Châu Á",
    head: "chau",
  },
];

export default function DiscoverSongPage(props: IDiscoverSongPageProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchDiscoverExplore({
        type: "song",
        key: "moi-hot",
        page: 1,
        pageSize: 36,
      })
    );
  }, [dispatch]);

  const { dataExporeSPV } = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverSongPage.tsx ~ line 21 ~ DiscoverSongPage ~ dataExporeSPV",
    dataExporeSPV
  );

  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={MenuSelectSong}></MenuSelect>
    </LayoutMusicPage>
  );
}
