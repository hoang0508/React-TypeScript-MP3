import * as React from "react";
import { IconSearch } from "../../components/icon";

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  return (
    <div className="flex gap-x-2 border border-borderColor  bg-bgColor2 max-w-[450px] py-2 px-1">
      <IconSearch></IconSearch>
      <input
        type="text"
        className="bg-transparent text-text2"
        placeholder="Tìm kiếm..."
      />
    </div>
  );
}
