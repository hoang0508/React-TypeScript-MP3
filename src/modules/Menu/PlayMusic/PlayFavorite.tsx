import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconHeart } from "../../../components/icon";
import { useLocalStrContext } from "../../../contexts/ContextLocalStroage";
import { setItemFavorite } from "../../../redux/MusicSlice";
import { MusicItemType } from "../../../utils/type";

interface IPlayFavoriteProps {
  data: MusicItemType;
}

export default function PlayFavorite({
  data: dataFavorite,
}: IPlayFavoriteProps) {
  // context localstrorage
  const { setValueFavorite, storedFavorite } = useLocalStrContext();
  const dispatch = useDispatch();

  const [h, setH] = useState(storedFavorite);
  useEffect(() => {
    dispatch(setItemFavorite(h));
  }, [dispatch, h]);

  if (!dataFavorite) return null;
  const handleFavoriteSong = () => {
    setH((prevItems: MusicItemType[]) => {
      const isExisted =
        prevItems &&
        prevItems.length > 0 &&
        prevItems.some((item: MusicItemType) => item.key === dataFavorite.key);

      if (isExisted) {
        const removeItems =
          prevItems &&
          prevItems.length > 0 &&
          prevItems.filter(
            (item: MusicItemType) => item.key !== dataFavorite.key
          );
        setValueFavorite([...removeItems]);
        return [...removeItems];
      }
      setValueFavorite([...prevItems, dataFavorite]);
      return [...prevItems, dataFavorite];
    });
  };
  const idKey = dataFavorite?.key;
  return (
    <IconHeart id={idKey} onClick={() => handleFavoriteSong()}></IconHeart>
  );
}
