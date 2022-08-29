import React from "react";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import { MusicItemType, NavigateName } from "../../utils/type";
import MusciItem from "../music/MusicItem";

interface ISearchVideo {
  dataSearchVideo: MusicItemType[];
}

const SearchVideo = ({ dataSearchVideo }: ISearchVideo) => {
  return (
    <GridLayout>
      {dataSearchVideo &&
        dataSearchVideo.length > 0 &&
        dataSearchVideo.map((item: MusicItemType) => (
          <MusciItem
            key={v4()}
            data={item}
            heading="abc"
            author={
              item.artists &&
              item.artists.map((art: any) => art.name).join(" , ")
            }
            isNavigate={NavigateName.Video}
          ></MusciItem>
        ))}
    </GridLayout>
  );
};

export default SearchVideo;
