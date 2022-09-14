import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverSong from "../modules/discover/DiscoverSong";
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

  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={MenuSelectSong}></MenuSelect>
      <DiscoverSong></DiscoverSong>
    </LayoutMusicPage>
  );
}
