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
  return <div></div>;
}
