import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getChart } from "nhaccuatui-api-full/dist";
import { weekNumber } from "../configs/ConfigDateTime";

interface IPalyLoadChart {
  category: string;
  week: number;
  year: number;
}

export const fetchDataRank: any = createAsyncThunk(
  "fetchRank",
  async ({ category, week, year }: IPalyLoadChart) => {
    const data = await getChart({
      category: category,
      time: {
        week: week,
        year: year,
      },
    });
    return data;
  }
);

const cur2: any = new Date();
const RankSlice = createSlice({
  name: "ranking",
  initialState: {
    dataTableRank: {},
    weeks: weekNumber - 1,
    days: cur2.getDay(),
    isLoading: true,
  },
  reducers: {
    setDecreDate: (state: any) => ({
      ...state,
      days: state.days + 7,
      weeks: state.weeks - 1,
    }),
    setIcreDate: (state: any) => ({
      ...state,
      days: state.days - 7,
      weeks: state.weeks + 1,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataRank.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    builder.addCase(fetchDataRank.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataTableRank = action.payload;
    });
  },
});

export const { setDecreDate, setIcreDate } = RankSlice.actions;
export default RankSlice.reducer;
