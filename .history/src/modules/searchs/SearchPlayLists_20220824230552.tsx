import * as React from "react";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "../music/MusicItem";

interface ISearchPlayListProps {
  dataSearchPlayList: MusicItemType[];
}

export default function SearchPlayList({
  dataSearchPlayList,
}: ISearchPlayListProps) {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-3">
      {dataSearchPlayList &&
        dataSearchPlayList.length > 0 &&
        dataSearchPlayList.map((item: MusicItemType) => (
          <MusciItem data={item} heading="abc"></MusciItem>
        ))}
    </div>
  );
}
