import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverTrending from "../modules/discover/DiscoverTrending";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import {
  fetchDiscoverTrend,
  fetchExploreArtists,
} from "../redux/DiscoverSlice";

const MenuSelectData = [
  {
    id: 1,
    title: "Hot",
    head: "all",
  },
  {
    id: 2,
    title: "Việt Nam",
    head: "song",
  },
  {
    id: 3,
    title: "Âu Mỹ",
    head: "playlist",
  },
  {
    id: 4,
    title: "Hàn Quốc",
    head: "video",
  },
];

const DiscoverArtistPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverTrend());
    dispatch(fetchExploreArtists({ nation: "hot", gender: 1 }));
  }, [dispatch]);

  const { dataExploreArtists } = useSelector((state: any) => state.discover);

  return (
    <LayoutMusicPage>
      <DiscoverTrending></DiscoverTrending>
      <MenuSelect dataSelect={MenuSelectData} onClick={() => {}}></MenuSelect>
      <h1>Page</h1>
    </LayoutMusicPage>
  );
};

export default DiscoverArtistPage;
