import * as React from "react";
import HeadingLine from "../../components/common/Headingline";
import { IconDelete } from "../../components/icon";
import { useLocalStrContext } from "../../contexts/ContextLocalStroage";
import "./styles.scss";
export interface ISearchHistoryProps {}

export default function SearchHistory(props: ISearchHistoryProps) {
  // contextLocalStrorage
  const { setValue: setValueSearchHis, storedValue: dataSearchHis } =
    useLocalStrContext();
  // handle remove searchHis
  const handleRemoveSearchHis = (id: number) => {
    const removeItemHis =
      dataSearchHis &&
      dataSearchHis.filter((item: { id: number }) => item.id !== id);
    setValueSearchHis(removeItemHis);
  };

  // handle removeAll his
  const handleRemoveAllHis = () => {
    setValueSearchHis([]);
  };

  // check
  if (dataSearchHis && dataSearchHis.length === 0) return <></>;
  return (
    <>
      <div>
        <div className="flex justify-between items-center">
          <HeadingLine>Lịch sử tìm kiếm</HeadingLine>
          <span className="cursor-pointer" onClick={() => handleRemoveAllHis()}>
            Xóa tất cả
          </span>
        </div>
      </div>
      {dataSearchHis &&
        dataSearchHis.length > 0 &&
        dataSearchHis.map((item: { id: number; nameSearchHis: string }) => (
          <div
            className="bg-bgColor2 py-3 px-4 flex justify-between items-center rounded mb-2 cursor-pointer search-his"
            key={item?.id}
          >
            <span>{item?.nameSearchHis}</span>
            <div className="search-his--delete">
              <IconDelete onClick={() => handleRemoveSearchHis(item?.id)} />
            </div>
          </div>
        ))}
    </>
  );
}
