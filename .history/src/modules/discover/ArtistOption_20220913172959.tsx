import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDataUpdateArtists } from "../../redux/DiscoverSlice";

export interface IArtistOptionProps {}

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

const dataArtistOption = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function ArtistOption(props: IArtistOptionProps) {
  const dispatch = useDispatch();

  const { dataExploreArtists } = useSelector((state: any) => state.discover);

  const [selectText, setSelectText] = React.useState("");
 

  const handleSelectOption = (e: any) => {
    setSelectText(e.target.value);
  };

  React.useEffect(() => {
    if (selectText !== "") {
      const selectDataOption =
        dataExploreArtists?.artist.length > 0 &&
        dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
          item.name.slice(0, 1).includes(selectText.toUpperCase());
        );
      console.log(selectDataOption);
      dispatch(setDataUpdateArtists(selectDataOption));
    } else {
      dispatch(setDataUpdateArtists(dataExploreArtists?.artist));
    }
  }, [selectText]);

  return (
    <select className="text-black" onChange={(e) => handleSelectOption(e)}>
      <option className="text-black" value="All">
        All
      </option>
      {dataArtistOption &&
        dataArtistOption.length > 0 &&
        dataArtistOption.map((item) => (
          <>
            <option className="text-black" value={item}>
              {item.toLocaleUpperCase()}
            </option>
          </>
        ))}
    </select>
  );
}
