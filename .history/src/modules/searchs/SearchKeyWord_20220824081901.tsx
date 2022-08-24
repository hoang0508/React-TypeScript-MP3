import { getTopKeyword } from "nhaccuatui-api-full/dist";
import * as React from "react";

export interface ItemKeyWork {
  title: string;
}

export default function SearchKeyWord() {
  const [keyWord, setKeyWord] = React.useState<[]>([]);
  console.log(
    "🚀 ~ file: SearchKeyWord.tsx ~ line 9 ~ SearchKeyWord ~ keyWord",
    keyWord
  );
  React.useEffect(() => {
    const fetchData = async () => {
      const reponse = await getTopKeyword();
      setKeyWord(reponse?.listKeyValue);
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-x-3 items-center">
      {keyWord &&
        keyWord.length > 0 &&
        keyWord.map((item: ItemKeyWork, index: number) => (
          <div className="flex gap-x-2 items-center bg-bgColor2 py-3 px-2">
            <span className="text-primary">#{index + 1}</span>
            <span>{item?.title}</span>
          </div>
        ))}
    </div>
  );
}
