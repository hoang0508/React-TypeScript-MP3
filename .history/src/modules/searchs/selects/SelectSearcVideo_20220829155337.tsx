import * as React from "react";
import { useSelector } from "react-redux";
import HeadingLine from "../../../components/common/Headingline";
import SearchVideo from "../SearchVideo";

interface ISelectVideoProps {
  video: [];
}

export default function SelectVideo({ video }: ISelectVideoProps) {
  const { dataSelect, selectName } = useSelector((state: any) => state.search);
  return (
    <>
      {dataSelect && dataSelect.length > 0 && selectName === "playlist" && (
        <>
          <HeadingLine>Video</HeadingLine>
          <SearchVideo dataSearchVideo={video}></SearchVideo>
        </>
      )}
    </>
  );
}
