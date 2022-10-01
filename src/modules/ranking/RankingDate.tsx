import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IocnChervonL from "../../components/icon/IconChervonL";
import IocnChervonR from "../../components/icon/IconChervonR";
import { first } from "../../configs/ConfigDateTime";
import { setDecreDate, setIcreDate } from "../../redux/RankingSlice";

const RankingDate = () => {
  // current day
  const curr: any = new Date();
  const dispatch = useDispatch();
  const { days, weeks } = useSelector((state: any) => state.ranking);

  // First day
  const firstD = curr.getDate() - days;
  const firstday = new Date(curr.setDate(firstD))
    .toLocaleDateString("vi-VI")
    .split("/")
    .slice(0, 2)
    .join("/");

  // lasDays
  const lastD = firstD - 6;
  const lastday: any = new Date();
  lastday.setDate(lastD);
  const lastDaysRank = lastday
    .toLocaleDateString("vi-VI")
    .split("/")
    .slice(0, 2)
    .join("/");

  return (
    <div className="mt-10 mb-4 flex items-center gap-x-5">
      <h3 className="font-bold text-[22px] text-text1">Tuần {weeks}:</h3>
      <div className="flex items-center gap-x-1 py-1 px-1 border rounded-full border-borderColor">
        <button
          className="cursor-pointer"
          onClick={() => dispatch(setDecreDate())}
        >
          <IocnChervonL className="w-4 h-4" />
        </button>
        <span className="text-text1 font-medium">
          {lastDaysRank} - {firstday}
        </span>
        <button
          className="cursor-pointer"
          onClick={() => dispatch(setIcreDate())}
          disabled={first === firstD ? true : false}
        >
          <IocnChervonR className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RankingDate;
