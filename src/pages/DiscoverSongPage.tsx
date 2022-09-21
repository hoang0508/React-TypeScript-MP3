import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import HeadingLine from "../components/common/Headingline";
import { LayoutMusicPage } from "../layout/LayoutMusicPage";
import DiscoverSong from "../modules/discover/DiscoverSong";
import MenuSelect from "../modules/Menu/MenuSelect/MenuSelect";
import { fetchDiscoverExplore } from "../redux/DiscoverSlice";
import { setActiveSelect } from "../redux/SearchSlice";

export interface IDiscoverSongPageProps {}

const MenuSelectSong = [
  {
    id: 1,
    title: "Mới & Hot",
    head: "moi-hot",
  },
  {
    id: 2,
    title: "Việt Nam",
    head: "viet-nam",
  },
  {
    id: 3,
    title: "Âu Mỹ",
    head: "au-my",
  },
  {
    id: 4,
    title: "Châu Á",
    head: "chau-a",
  },
];
const itemsPerPage = 36;

export default function DiscoverSongPage(props: IDiscoverSongPageProps) {
  const dispatch = useDispatch();

  // Clean up useEffect
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    isMounted.current = true;
    //cleanup
    return () => {
      // mounted
      isMounted.current = false;
    };
  }, []);

  // page size
  const [nextPage, setNextPage] = useState(1);

  useEffect(() => {
    dispatch(
      fetchDiscoverExplore({
        type: "song",
        key: "moi-hot",
        page: nextPage,
        pageSize: itemsPerPage,
      })
    );
  }, [dispatch, nextPage]);
  const { dataExporeSPV } = useSelector((state: any) => state.discover);

  // pagination
  // Phân trang thư viện pagination
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    // if (dataExporeSPV?.status !== "success") return null;
    if (dataExporeSPV?.status === "success") {
      setPageCount(Math.ceil(dataExporeSPV?.total / itemsPerPage));
    }
  }, [dataExporeSPV, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % dataExporeSPV?.total;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  // Active select tab
  useEffect(() => {
    dispatch(setActiveSelect("moi-hot"));
  }, [dispatch]);

  return (
    <LayoutMusicPage>
      <MenuSelect dataSelect={MenuSelectSong}></MenuSelect>
      <HeadingLine className="text-[18px]  font-bold mb-5">
        Mới & Hot
      </HeadingLine>
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
