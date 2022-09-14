import * as React from "react";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import onErrorImg from "../../hooks/useErrorImg";
import ArtistOption from "./ArtistOption";

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

export default function DiscoverArtistImg() {
  const { dataExploreArtists } = useSelector((state: any) => state.discover);
  if (!dataExploreArtists) return null;

  // console.log(
  //   "🚀 ~ file: DiscoverArtistPage.tsx ~ line 42 ~ DiscoverArtistPage ~ dataExploreArtists",
  //   dataExploreArtists
  // );

  const demo =
    dataExploreArtists &&
    dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
      item.name.slice(0, 1).includes("T")
    );

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
