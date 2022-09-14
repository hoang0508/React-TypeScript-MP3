import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchByKeyword } from "nhaccuatui-api-full/dist";

export const FetchSearchData: any = createAsyncThunk(
  "SearchMusic",
  async (payload: string, getState) => {
    const data = await searchByKeyword(payload);
    return data;
  }
);

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    dataSearch: {},
    dataSelect: [],
    loading: false,
    selectName: "",
    activeSelect: "",
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
  },
  extraReducers: (builder) => {
    builder.addCase(FetchSearchData.fulfilled, (state, action) => {
      state.loading = true;
      state.dataSearch = action.payload;
    });
  },
});

export const { setActiveSelect, setDataSelectName, setDataSelect } =
  SearchSlice.actions;
export default SearchSlice.reducer;
