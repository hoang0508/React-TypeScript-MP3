import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import onErrorImg from "../../hooks/useErrorImg";
import ArtistOption from "./ArtistOption";

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

export default function DiscoverArtistImg() {
  const { dataExploreArtists, dataUpdateArtists } = useSelector(
    (state: any) => state.discover
  );
  console.log(
    "🚀 ~ file: DiscoverArtistImg.tsx ~ line 15 ~ DiscoverArtistImg ~ dataUpdateArtists",
    dataUpdateArtists
  );
  if (!dataExploreArtists) return null;

  return (
    <>
      <ArtistOption />
      <GridLayout>
        {dataExploreArtists?.artist &&
          dataExploreArtists?.artist.length > 0 &&
          dataExploreArtists?.artist
            .slice(0, 24)
            .map((item: IDataArtistImg) => (
              <div key={v4()} className="mb-3">
                <div className="cursor-pointer mb-2">
                  <img
                    src={item?.imageUrl || "/img-error.png"}
                    onError={(e) => onErrorImg(e)}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-center block">{item?.name}</span>
              </div>
            ))}
      </GridLayout>
    </>
  );
}
