import React from "react";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverTrending from "../modules/discover/DiscoverTrending";

const DiscoverPage = () => {
  return (
    <LayoutMusicPage>
      <DiscoverTrending></DiscoverTrending>
    </LayoutMusicPage>
  );
};

export default DiscoverPage;
