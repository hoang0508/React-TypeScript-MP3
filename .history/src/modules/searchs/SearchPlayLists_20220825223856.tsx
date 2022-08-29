import * as React from "react";
import { v4 } from "uuid";
import { MusicItemType } from "../../utils/type";
import MusciItem from "../music/MusicItem";

interface ISearchPlayListProps {
  dataSearchPlayList: MusicItemType[];
}

export default function SearchPlayList({
  dataSearchPlayList,
}: ISearchPlayListProps) {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-5">
      {dataSearchPlayList &&
        dataSearchPlayList.length > 0 &&
        dataSearchPlayList.map((item: MusicItemType) => (
          <MusciItem
            key={v4()}
            data={item}
            heading="abc"
            author={
              item.artists &&
              item.artists.map((art: any) => art.name).join(" , ")
            }
          ></MusciItem>
        ))}
    </div>
  );
}
