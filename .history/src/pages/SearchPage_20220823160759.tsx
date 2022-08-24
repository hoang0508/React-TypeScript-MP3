import React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import SearchInput from "../modules/searchs/SearchInput";

const SearchPage = () => {
  const { dataSearch } = useSelector((state: any) => state.search);
  return (
    <LayoutMusicPage>
      {/* <SearchInput></SearchInput> */}
      <HeadingLine>Top từ khóa</HeadingLine>
    </LayoutMusicPage>
  );
};

export default SearchPage;
