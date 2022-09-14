import * as React from "react";
import { useSelector } from "react-redux";

export interface IDiscoverArtistImgProps {}

export default function DiscoverArtistImg(props: IDiscoverArtistImgProps) {
  const { dataExploreArtists } = useSelector((state: any) => state.discover);
  console.log(
    "🚀 ~ file: DiscoverArtistPage.tsx ~ line 42 ~ DiscoverArtistPage ~ dataExploreArtists",
    dataExploreArtists
  );
  return <div>Page</div>;
}
