import React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";

const SearchPage = () => {
  const { dataSearch } = useSelector((state: any) => state.search);
  const STATE = useSelector((state: any) => state);
  console.log("state :>> ", STATE);
  return (
    <LayoutMusicPage>
      <div className="border-b border-borderColor pb-3 mb-8">
        <SearchInput></SearchInput>
      </div>
      <HeadingLine>Top từ khóa</HeadingLine>
      <SearchKeyWord></SearchKeyWord>
    </LayoutMusicPage>
  );
};

export default SearchPage;
