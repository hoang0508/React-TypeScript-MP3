import * as React from "react";
import { useSelector } from "react-redux";
import OfferPlayList from "./parts/OfferPlaylist";
import OfferSong from "./parts/OfferSong";
import OfferVideo from "./parts/OfferVideo";

export interface ISearchOfferProps {}

export default React.memo(function SearchOffer(props: ISearchOfferProps) {
  const { dataOffer, isShow: isShowOffer } = useSelector(
    (state: any) => state.search
  );
  const song = dataOffer?.search?.song?.song;
  const playlist = dataOffer?.search?.playlist?.playlist;
  const video = dataOffer?.search?.video?.video;

  return (
    <>
      {isShowOffer && (
        <div
          className={`bg-slate-800 max-w-[450px] w-full ${
            dataOffer?.status === "error" ? "h-[150px]" : "h-[400px]"
          }  overflow-y-scroll custom-scroll absolute z-30`}
        >
          <OfferSong dataOfferSong={song}></OfferSong>
          <OfferPlayList dataOfferPlayList={playlist}></OfferPlayList>
          <OfferVideo dataOfferVideo={video}></OfferVideo>
        </div>
      )}
    </>
  );
});
