import * as React from "react";

export interface IArtistOptionProps {}

const dataArtistOption = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function ArtistOption(props: IArtistOptionProps) {
  return (
    <select className="text-black">
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
