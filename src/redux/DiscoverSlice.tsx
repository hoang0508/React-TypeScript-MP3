import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrendingArtists, exploreArtists } from "nhaccuatui-api-full/dist";

// fetch data discover trend
export const fetchDiscoverTrend: any = createAsyncThunk(
  "fetchDiscoverTrend",
  async () => {
    const data = await getTrendingArtists();
    return data;
  }
);

// ExploreArtists
export const fetchExploreArtists: any = createAsyncThunk(
  "",
  async (payload: {}) => {
    const data = await exploreArtists(payload);
    return data;
  }
);

const DiscoverSlice = createSlice({
  name: "discover",
  initialState: {
    isLoading: false,
    errorMessage: "",
    dataDisTrending: {},
    dataExploreArtists: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiscoverTrend.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataDisTrending = action.payload;
    });
    builder.addCase(fetchExploreArtists.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataExploreArtists = action.payload;
    });
  },
});

export default DiscoverSlice.reducer;
