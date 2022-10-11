import * as React from "react";
import { AiFillHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { MusicItemType } from "../../utils/type";
interface IIconHeartProps {
  onClick: () => void;
  id: string;
}

export default function IconHeart({ onClick, id }: IIconHeartProps) {
  const { itemFavorite } = useSelector((state: any) => state.music);
  const idFavorite =
    itemFavorite &&
    itemFavorite.length > 0 &&
    itemFavorite
      .filter((item: MusicItemType) => item.key === id)
      .map((item: MusicItemType) => item?.key)
      .join("");

  return (
    <span
      className={`text-[20px] cursor-pointer ${
        id === idFavorite ? "text-primary" : "text-white"
      }`}
      onClick={onClick}
    >
      <AiFillHeart />
    </span>
  );
}
