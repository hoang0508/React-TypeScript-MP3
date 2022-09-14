import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTrendingArtists,
  exploreArtists,
  explore,
} from "nhaccuatui-api-full/dist";

interface typeExplore {
  type: "song" | "playlist" | "mv";
  key: string;
  page: number;
  pageSize: number;
}

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
  "fetchArtists",
  async (payload: {}) => {
    const data = await exploreArtists(payload);
    return data;
  }
);

// data discoverExplore
export const fetchDiscoverExplore: any = createAsyncThunk(
  "fetchDiscoverExplore",
  async (payload: typeExplore) => {
    const data = await explore(payload);
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
    dataUpdateArtists: [],
    dataExporeSPV: {},
  },
  reducers: {
    setDataUpdateArtists: (state, action) => ({
      ...state,
      dataUpdateArtists: action.payload,
    }),
  },
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
    builder.addCase(fetchDiscoverExplore.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataExporeSPV = action.payload;
    });
  },
});

export const { setDataUpdateArtists } = DiscoverSlice.actions;
export default DiscoverSlice.reducer;
