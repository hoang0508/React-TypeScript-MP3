import * as React from "react";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "../music/MusicItem";

interface ISearchPlayListProps {
  dataSearchPlayList: MusicItemType[];
}

export default function SearchPlayList({
  dataSearchPlayList,
}: ISearchPlayListProps) {
  return (
    <GridLayout>
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
    </GridLayout>
  );
}
