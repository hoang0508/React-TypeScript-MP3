import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrendingArtists } from "nhaccuatui-api-full/dist";

// fetch data discover trend
export const fetchDiscoverTrend: any = createAsyncThunk(
  "fetchDiscoverTrend",
  async () => {
    const data = await getTrendingArtists();
    return data;
  }
);

const DiscoverSlice = createSlice({
  name: "discover",
  initialState: {
    isLoading: false,
    errorMessage: "",
    dataDisTrending: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscoverTrend.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataDisTrending = action.payload;
    });
  },
});

export default DiscoverSlice.reducer;
