import * as React from "react";
import { IconSearch } from "../../components/icon";
import lodash from "lodash";
import { useDispatch } from "react-redux";
import { FetchSearchData } from "../../redux/SearchSlice";
export interface ISearchInputProps {}

export default function SearchInput(props: ISearchInputProps) {
  // Change state input search
  const [musicSearch, setMusicSearch] = React.useState<string>("");
  const handleChangeSearch = lodash.debounce((e: any) => {
    setMusicSearch(e.target.value);
  }, 500);

  // dispatch call data search
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchSearchData(musicSearch));
  }, [dispatch, musicSearch]);
  return (
    <div className="flex gap-x-2 border border-borderColor rounded  bg-bgColor2 max-w-[450px] py-2 px-1 focus:border-primary transition-all">
      <IconSearch></IconSearch>
      <input
        type="text"
        className="bg-transparent text-white"
        placeholder="Tìm kiếm..."
        onChange={(e) => handleChangeSearch(e)}
      />
    </div>
  );
}
