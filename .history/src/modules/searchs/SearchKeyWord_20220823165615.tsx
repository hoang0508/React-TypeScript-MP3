import { getTopKeyword } from "nhaccuatui-api-full/dist";
import * as React from "react";

interface ISearchKeyWordProps {}

export default function SearchKeyWord(props: ISearchKeyWordProps) {
  const [keyWord, setKeyWord] = React.useState<string[]>();
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
      <div className="flex gap-x-2 items-center bg-bgColor2 py-3 px-2">
        <span className="text-primary">#1</span>
        <span>Pink Venom</span>
      </div>
    </div>
  );
}
