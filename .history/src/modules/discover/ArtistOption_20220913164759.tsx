import * as React from "react";

export interface IArtistOptionProps {}

const dataArtistOption = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function ArtistOption(props: IArtistOptionProps) {
  return (
    <select>
      <option value="All">All</option>
      {dataArtistOption &&
        dataArtistOption.length > 0 &&
        dataArtistOption.map((item) => (
          <>
            <option value={item}>{item}</option>
          </>
        ))}
    </select>
  );
}
