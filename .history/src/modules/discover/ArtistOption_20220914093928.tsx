import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Select } from "../../components/select";
import { setDataUpdateArtists } from "../../redux/DiscoverSlice";

export interface IArtistOptionProps {}

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

const dataArtistOption = ["a", "b", "c", "d", "e", "f", "g", "h"];
const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "e" },
];

export default function ArtistOption(props: IArtistOptionProps) {
  const dispatch = useDispatch();

  const { dataExploreArtists } = useSelector((state: any) => state.discover);

  // state change text
  const [selectText, setSelectText] = React.useState<string>("All");

  // func onChange option
  const handleSelectOption = (e: any) => {
    console.log(
      "🚀 ~ file: ArtistOption.tsx ~ line 34 ~ handleSelectOption ~ e",
      e
    );
    setSelectText(e.target.value);
  };

  React.useEffect(() => {
    if (dataExploreArtists?.status === "success") {
      if (selectText === "All") {
        dispatch(setDataUpdateArtists(dataExploreArtists?.artist));
      } else {
        const selectDataOption =
          dataExploreArtists?.artist?.length > 0 &&
          dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
            item.name.slice(0, 1).includes(selectText.toUpperCase())
          );
        console.log(selectDataOption);
        dispatch(setDataUpdateArtists(selectDataOption));
      }
    }
  }, [selectText]);

  return (
    <Select className="" onChange={(e: any) => handleSelectOption(e)}>
      <option className="text-black" value={"All"}>
        All
      </option>
      {data &&
        data.length > 0 &&
        data.map((item) => (
          <>
            <option className="text-black" value={item?.name}>
              {item.name.toLocaleUpperCase()}
            </option>
          </>
        ))}
    </Select>
  );
}
