import React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../../../components/common/Headingline";
import { MusicItemType } from "../../../utils/type";
import MusciItem from "../../music/MusicItem";
const SelectSearchSong = () => {
  const { dataSelect, selectName } = useSelector((state: any) => state.search);
  return (
    <>
      {dataSelect && dataSelect.length > 0 && selectName === "song" && (
        <>
          <HeadingLine>Bài hát</HeadingLine>
          <div className="grid grid-cols-4 gap-5">
            {dataSelect &&
              dataSelect.length > 0 &&
              dataSelect.map((item: MusicItemType) => (
                <MusciItem
                  heading="abc"
                  data={item}
                  author={
                    item.artists &&
                    item.artists.map((art: any) => art.name).join(" , ")
                  }
                ></MusciItem>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default SelectSearchSong;
