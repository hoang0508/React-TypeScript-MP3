import React from "react";
import GridLayout from "../../components/common/GridLayout";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "../music/MusicItem";

interface ISearchVideo {
  dataSearchVideo: MusicItemType[];
}

const SearchVideo = ({ dataSearchVideo }: ISearchVideo) => {
  console.log(
    "🚀 ~ file: SearchVideo.tsx ~ line 11 ~ SearchVideo ~ dataSearchVideo",
    dataSearchVideo
  );
  return (
    <GridLayout>
      {dataSearchVideo &&
        dataSearchVideo.length > 0 &&
        dataSearchVideo.map((item: MusicItemType) => (
          <MusciItem data={item} heading="abc"></MusciItem>
        ))}
    </GridLayout>
  );
};

export default SearchVideo;
