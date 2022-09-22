import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchByKeyword } from "nhaccuatui-api-full/dist";

export const FetchSearchData: any = createAsyncThunk(
  "SearchMusic",
  async (payload: string, getState) => {
    const data = await searchByKeyword(payload);
    return data;
  }
);

// call data
export const FetchSearchDffer: any = createAsyncThunk(
  "SearchOffer",
  async (payload: string, getState) => {
    const data = await searchByKeyword(payload);
    return data;
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    dataSearch: {},
    dataOffer: undefined,
    dataSelect: [],
    loading: true,
    selectName: "",
    activeSelect: "",
    musicSearch: "",
    isShow: false,
  },
  reducers: {
    setActiveSelect: (state, action) => ({
      ...state,
      activeSelect: action.payload,
    }),
    setDataSelectName: (state, action) => ({
      ...state,
      selectName: action.payload,
    }),
    setDataSelect: (state, action) => ({
      ...state,
      dataSelect: action.payload,
    }),
    setMusicSearch: (state, action) => {
      state.musicSearch = action.payload;
    },
    setIsShow: (state, action) => ({
      ...state,
      isShow: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(FetchSearchData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataSearch = action.payload;
    });
    builder.addCase(FetchSearchDffer.fulfilled, (state, action) => {
      state.loading = false;
      state.dataOffer = action.payload;
    });
  },
});

export const {
  setActiveSelect,
  setDataSelectName,
  setDataSelect,
  setMusicSearch,
  setIsShow,
} = SearchSlice.actions;
export default SearchSlice.reducer;
