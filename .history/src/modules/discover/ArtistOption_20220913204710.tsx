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

  // state change text
  const [selectText, setSelectText] = React.useState("");
  console.log(
    "🚀 ~ file: ArtistOption.tsx ~ line 21 ~ ArtistOption ~ selectText",
    selectText
  );

  // func onChange option
  const handleSelectOption = (e: any) => {
    setSelectText(e.target.value);
  };

  // useEffect , thay đổi khi có option thì xét lại data
  React.useEffect(() => {
    if (selectText !== "") {
      const selectDataOption =
        dataExploreArtists?.artist.length > 0 &&
        dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
          item.name.slice(0, 1).includes(selectText.toUpperCase())
        );
      dispatch(setDataUpdateArtists(selectDataOption));
    } else {
      dispatch(setDataUpdateArtists(dataExploreArtists?.artist));
    }
  }, [selectText]);

  const handleOptionAll = () => {};

  return (
    <select className="text-black" onChange={(e) => handleSelectOption(e)}>
      <option
        className="text-black"
        value="All"
        onClick={() => handleOptionAll()}
      >
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
