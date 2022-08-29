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

const DiscoverPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverTrend());
    dispatch(fetchExploreArtists({ nation: "vietnam", gender: 1 }));
  }, [dispatch]);

  const { dataExploreArtists } = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverPage.tsx ~ line 39 ~ DiscoverPage ~ dataExploreArtists",
    dataExploreArtists
  );

  return (
    <LayoutMusicPage>
      <DiscoverTrending></DiscoverTrending>
      <MenuSelect dataSelect={MenuSelectData} onClick={() => {}}></MenuSelect>
    </LayoutMusicPage>
  );
};

export default DiscoverPage;
