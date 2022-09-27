import React, { useCallback, useEffect } from "react";
import { IconClose, IconSearch } from "../../components/icon";
import lodash from "lodash";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSearchData,
  FetchSearchDffer,
  setIsShow,
  setMusicSearch,
} from "../../redux/SearchSlice";
import useClickOutSide from "../../hooks/useClickOutSide";
import { useLocalStrContext } from "../../contexts/ContextLocalStroage";
export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  // Change state input search
  // const [musicSearch, setMusicSearch] = React.useState<string>("");
  const { musicSearch, isShow: inputBorder } = useSelector(
    (state: any) => state.search
  );
  // dispatch call data search
  const dispatch = useDispatch();

  // useCallback debound
  const onSetDebounceKeyKeyWord = useCallback(
    lodash.debounce((text) => dispatch(setMusicSearch(text)), 500),
    []
  );

  // set Input change
  const handleChangeSearch = (e: any) => {
    onSetDebounceKeyKeyWord(e.target.value);
    // lodash.debounce(() => dispatch(setMusicSearch(e.target.value)), 500);
    dispatch(setMusicSearch(e.target.value));
  };

  // context localstrorage
  const { setValue: setValueSearchHis, storedValue } = useLocalStrContext();

  // key down enter
  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      // 👇️ your logic here
      setValueSearchHis([
        ...storedValue,
        {
          id: Math.floor(Math.random() * 1000),
          nameSearchHis: musicSearch,
        },
      ]);
      dispatch(FetchSearchData(musicSearch));
      dispatch(setIsShow(false));
    } else {
      dispatch(FetchSearchData(""));
    }
  };

  // useEffect FetchSearchData
  useEffect(() => {
    dispatch(FetchSearchData(""));
  }, [dispatch]);

  // useEffect
  useEffect(() => {
    if (musicSearch) {
      dispatch(setIsShow(true));
      dispatch(FetchSearchDffer(musicSearch));
    }
    dispatch(FetchSearchDffer(""));
  }, [dispatch, musicSearch]);

  // hook useClickoutSide
  const { nodeRef: inputRef } = useClickOutSide();

  // click input set border
  const handleClickInput = () => {
    dispatch(setIsShow(!inputBorder));
  };

  // Remove text search
  const handleRemoveText = () => {
    dispatch(setMusicSearch(""));
    dispatch(FetchSearchData(""));
    dispatch(FetchSearchDffer(""));
  };

  return (
    <div
      className={`relative flex gap-x-2 border  rounded  bg-bgColor2 max-w-[450px] py-2 px-1 transition-all cursor-pointer ${
        inputBorder ? "border-primary" : "border-borderColor"
      }`}
      onClick={() => handleClickInput()}
      ref={inputRef}
    >
      <IconSearch></IconSearch>
      <input
        type="text"
        className="bg-transparent text-white w-full"
        placeholder="Tìm kiếm..."
        onChange={(e) => handleChangeSearch(e)}
        onKeyDown={(e) => handleKeyDown(e)}
        value={musicSearch}
      />
      {inputBorder && (
        <span
          className="absolute top-2/4 right-3 -translate-y-2/4"
          onClick={() => handleRemoveText()}
        >
          <IconClose />
        </span>
      )}
    </div>
  );
}
