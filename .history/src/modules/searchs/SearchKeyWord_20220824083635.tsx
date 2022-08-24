import { getTopKeyword } from "nhaccuatui-api-full/dist";
import * as React from "react";

export interface ItemKeyWork {
  title: string;
}

export default function SearchKeyWord() {
  const [keyWord, setKeyWord] = React.useState<[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const reponse = await getTopKeyword();
      setKeyWord(reponse?.listKeyValue);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-3 items-center">
      {keyWord &&
        keyWord.length > 0 &&
        keyWord.map((item: ItemKeyWork, index: number) => (
          <div
            key={index}
            className="flex gap-x-2 items-center bg-bgColor2 py-3 px-2"
          >
            <span className="text-primary">#{index + 1}</span>
            <span>{item?.title}</span>
          </div>
        ))}
    </div>
  );
}
