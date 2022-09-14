import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import onErrorImg from "../../hooks/useErrorImg";

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

export default function DiscoverArtistImg() {
  const { dataExploreArtists } = useSelector((state: any) => state.discover);
  if (!dataExploreArtists) return null;

  console.log(
    "🚀 ~ file: DiscoverArtistPage.tsx ~ line 42 ~ DiscoverArtistPage ~ dataExploreArtists",
    dataExploreArtists
  );
  return (
    <GridLayout>
      {dataExploreArtists?.artist &&
        dataExploreArtists?.artist.length > 0 &&
        dataExploreArtists?.artist.map((item: IDataArtistImg) => (
          <div key={v4()}>
            <img
              src={item?.imageUrl || "/img-error.png"}
              onError={(e) => onErrorImg(e)}
              alt=""
            />
          </div>
        ))}
    </GridLayout>
  );
}
