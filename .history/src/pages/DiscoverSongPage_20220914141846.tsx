import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverSong from "../modules/discover/DiscoverSong";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import { fetchDiscoverExplore } from "../redux/DiscoverSlice";

export interface IDiscoverSongPageProps {}

const MenuSelectSong = [
  {
    id: 1,
    title: "Mới & Hot",
    head: "hot",
  },
  {
    id: 2,
    title: "Việt Nam",
    head: "vietnam",
  },
  {
    id: 3,
    title: "Âu Mỹ",
    head: "aumy",
  },
  {
    id: 4,
    title: "Châu Á",
    head: "chau",
  },
];
const itemsPerPage = 36;

export default function DiscoverSongPage(props: IDiscoverSongPageProps) {
  const dispatch = useDispatch();

  const [nextPage, setNextPage] = useState(1);

  // pagination
  // Phân trang thư viện pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {

  // })

  const handlePageClick = () => {};

  useEffect(() => {
    dispatch(
      fetchDiscoverExplore({
        type: "song",
        key: "moi-hot",
        page: 1,
        pageSize: itemsPerPage,
      })
    );
  }, [dispatch]);

  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={MenuSelectSong}></MenuSelect>
      <DiscoverSong></DiscoverSong>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </LayoutMusicPage>
  );
}
