import { getTopKeyword } from "nhaccuatui-api-full/dist";
import * as React from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import {
  FetchSearchData,
  FetchSearchDffer,
  setMusicSearch,
} from "../../redux/SearchSlice";

interface ItemKeyWork {
  title: string;
}

export default function SearchKeyWord() {
  const [keyWord, setKeyWord] = React.useState<[]>([]);

  //

  React.useEffect(() => {
    const fetchData = async () => {
      const reponse = await getTopKeyword();
      setKeyWord(reponse?.listKeyValue);
    };
    fetchData();
  }, []);

  // dispatch
  const dispatch = useDispatch();

  const handleClickKeyWord = (title: string) => {
    dispatch(setMusicSearch(title));
    dispatch(FetchSearchDffer(title));
    dispatch(FetchSearchData(title));
  };

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3 items-center cursor-pointer">
      {keyWord &&
        keyWord.length > 0 &&
        keyWord.map((item: ItemKeyWork, index: number) => (
          <div
            key={v4()}
            className="flex gap-x-2 items-center bg-bgColor2 py-3 px-2"
            onClick={() => handleClickKeyWord(item?.title)}
          >
            <span className="text-primary">#{index + 1}</span>
            <span>{item?.title}</span>
          </div>
        ))}
    </div>
  );
}
