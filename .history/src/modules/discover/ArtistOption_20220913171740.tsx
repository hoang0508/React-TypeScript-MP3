import * as React from "react";
import { useSelector } from "react-redux";

export interface IArtistOptionProps {}

interface IDataArtistImg {
  imageUrl: string;
  name: string;
}

const dataArtistOption = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function ArtistOption(props: IArtistOptionProps) {
  const { dataExploreArtists } = useSelector((state: any) => state.discover);

  const [select, setSelect] = React.useState("");
  console.log(
    "🚀 ~ file: ArtistOption.tsx ~ line 18 ~ ArtistOption ~ select",
    select
  );

  const selectDataOption =
    dataExploreArtists.length > 0 &&
    dataExploreArtists?.artist.filter((item: IDataArtistImg) =>
      item.name.slice(0, 1).includes("T")
    );

  const handleSelectOption = (e: any) => {
    setSelect(e.target.value);
  };

  //   React.useEffect(() => {
  //     if(select !==
  // }, [])

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
