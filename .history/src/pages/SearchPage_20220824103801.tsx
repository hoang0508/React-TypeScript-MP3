import React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import SearchHits from "../modules/searchs/SearchHits";
import SearchInput from "../modules/searchs/SearchInput";
import SearchKeyWord from "../modules/searchs/SearchKeyWord";

const SearchPage = () => {
  const { dataSearch } = useSelector((state: any) => state.search);
  return (
    <LayoutMusicPage>
      <div className="border-b border-borderColor pb-3 mb-8">
        <SearchInput></SearchInput>
      </div>
      <HeadingLine>Top từ khóa</HeadingLine>
      <SearchKeyWord></SearchKeyWord>
      <HeadingLine>Có thể hits</HeadingLine>
      <SearchHits></SearchHits>
    </LayoutMusicPage>
  );
};

export default SearchPage;
