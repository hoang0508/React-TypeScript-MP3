import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  console.log(
    "🚀 ~ file: ArtistOption.tsx ~ line 25 ~ ArtistOption ~ dataExploreArtists",
    dataExploreArtists
  );

  // state change text
  const [selectText, setSelectText] = React.useState<string>("All");
  console.log("typeOf(selectText) :>> ", typeof selectText);
  console.log(selectText);

  // func onChange option
  const handleSelectOption = (e: any) => {
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

  // useEffect , thay đổi khi có option thì xét lại data
  // React.useEffect(() => {
  //   switch (selectText) {
  //     case select Text !== "0":
  //       const selectDataOption =
  //         dataExploreArtists?.artist?.length > 0 &&
  //         dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
  //           item.name.slice(0, 1).includes(selectText.toUpperCase())
  //         );
  //       dispatch(setDataUpdateArtists(selectDataOption));
  //       break;
  //     case selectText === "0":
  //       dispatch(setDataUpdateArtists(dataExploreArtists?.artist));
  //       break;

  //     default:
  //       break;
  //   }
  // }, [selectText]);

  return (
    <select className="text-black" onChange={(e) => handleSelectOption(e)}>
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
    </select>
  );
}
