import * as React from "react";
import { useSelector } from "react-redux";
import GridLayout from "../../components/common/GridLayout";

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

export default function DiscoverArtistImg() {
  const { dataExploreArtists } = useSelector((state: any) => state.discover);
  if (!dataExploreArtists) return [];

  console.log(
    "🚀 ~ file: DiscoverArtistPage.tsx ~ line 42 ~ DiscoverArtistPage ~ dataExploreArtists",
    dataExploreArtists
  );
  return (
    <GridLayout>
      {dataExploreArtists?.artist &&
        dataExploreArtists?.artist.length > 0 &&
        dataExploreArtists?.artist.map((item: IDataArtistImg) => (
          <div>
            <img src="" alt="" />
          </div>
        ))}
    </GridLayout>
  );
}
