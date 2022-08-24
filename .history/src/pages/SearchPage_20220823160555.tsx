import React from "react";
import { useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import SearchInput from "../modules/searchs/SearchInput";

const SearchPage = () => {
  const { dataSearch } = useSelector((state: any) => state.search);
  console.log(
    "🚀 ~ file: SearchPage.tsx ~ line 8 ~ SearchPage ~ dataSearch",
    dataSearch
  );
  return (
    <LayoutMusicPage>
      <SearchInput></SearchInput>
    </LayoutMusicPage>
  );
};

export default SearchPage;
