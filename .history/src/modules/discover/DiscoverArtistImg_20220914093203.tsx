import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import GridLayout from "../../components/common/GridLayout";
import onErrorImg from "../../hooks/useErrorImg";
import { setDataUpdateArtists } from "../../redux/DiscoverSlice";
import ArtistOption from "./ArtistOption";

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

export default function DiscoverArtistImg() {
  const { dataUpdateArtists, dataExploreArtists } = useSelector(
    (state: any) => state.discover
  );
  console.log(dataUpdateArtists);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(setDataUpdateArtists(dataExploreArtists?.artist));
  }, [dataExploreArtists?.artist, dispatch]);
  if (!dataUpdateArtists && dataUpdateArtists?.length === 0) return null;

  return (
    <>
      <ArtistOption />
      <div className="mt-4">
        <GridLayout>
          {dataUpdateArtists &&
            dataUpdateArtists.length > 0 &&
            dataUpdateArtists.slice(0, 24).map((item: IDataArtistImg) => (
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
      </div>
    </>
  );
}
