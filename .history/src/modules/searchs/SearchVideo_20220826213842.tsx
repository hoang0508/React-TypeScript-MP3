import React from "react";
import GridLayout from "../../components/common/GridLayout";
import { MusicItemType } from "../../utils/enum";
import MusciItem from "../music/MusicItem";

interface ISearchVideo {
  dataSearVideo: MusicItemType[];
}

const SearchVideo = ({ dataSearVideo }: ISearchVideo) => {
  console.log(
    "🚀 ~ file: SearchVideo.tsx ~ line 11 ~ SearchVideo ~ dataSearVideo",
    dataSearVideo
  );
  return (
    <GridLayout>
      {dataSearVideo &&
        dataSearVideo.length > 0 &&
        dataSearVideo.map((item: MusicItemType) => (
          <MusciItem data={item} heading="abc"></MusciItem>
        ))}
    </GridLayout>
  );
};

export default SearchVideo;
