import * as React from "react";
import { IconSearch } from "../../components/icon";

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  return (
    <div className="flex border border-borderColor">
      <IconSearch></IconSearch>
      <input type="text" className="" />
    </div>
  );
}
