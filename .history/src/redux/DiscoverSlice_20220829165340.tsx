import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrendingArtists } from "nhaccuatui-api-full/dist";

export const fetchDiscoverTrend: any = createAsyncThunk(
  "fetchDiscoverTrend",
  async () => {
    const data = await getTrendingArtists();
    return data;
  }
);

const DiscoverSlice = createSlice({
  name: "discover",
  initialState: {},
  reducers: {},
  extraReducers: {},
});

export default DiscoverSlice.reducer;
