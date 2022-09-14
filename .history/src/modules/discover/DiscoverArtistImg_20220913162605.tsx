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
        dataExploreArtists?.artist.slice(0, 25).map((item: IDataArtistImg) => (
          <div key={v4()}>
            <div className="cursor-pointer mb-2">
              <img
                src={item?.imageUrl || "/img-error.png"}
                onError={(e) => onErrorImg(e)}
                alt=""
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-center">{item?.name}</span>
          </div>
        ))}
    </GridLayout>
  );
}
