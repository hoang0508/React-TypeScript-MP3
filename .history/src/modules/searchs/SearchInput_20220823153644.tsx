import * as React from "react";
import { IconSearch } from "../../components/icon";

export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  return (
    <div>
      <IconSearch></IconSearch>
      <input type="text" className="" />
    </div>
  );
}
