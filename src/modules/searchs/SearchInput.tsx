import React from "react";
import { IconSearch } from "../../components/icon";
import lodash from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { FetchSearchData, setMusicSearch } from "../../redux/SearchSlice";
import useClickOutSide from "../../hooks/useClickOutSide";
export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  // Change state input search
  // const [musicSearch, setMusicSearch] = React.useState<string>("");
  const { musicSearch } = useSelector((state: any) => state.search);
  // dispatch call data search
  const dispatch = useDispatch();

  const handleChangeSearch = lodash.debounce((e: any) => {
    dispatch(setMusicSearch(e.target.value));
  }, 500);

  React.useEffect(() => {
    dispatch(FetchSearchData(musicSearch));
  }, [dispatch, musicSearch]);

  // hook useClickoutSide
  const {
    show: inputBorder,
    setShow: setInputBorder,
    nodeRef: inputRef,
  } = useClickOutSide();

  const handleClickInput = () => {
    setInputBorder(!inputBorder);
  };
  return (
    <div
      className={`flex gap-x-2 border  rounded  bg-bgColor2 max-w-[450px] py-2 px-1 transition-all cursor-pointer ${
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
      />
    </div>
  );
}
