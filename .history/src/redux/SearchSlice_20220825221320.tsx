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
    activeSelect: "",
  },
  reducers: {
    setActiveSelect: (state, action) => ({
      ...state,
      activeSelect: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(FetchSearchData.fulfilled, (state, action) => {
      state.dataSearch = action.payload;
    });
  },
});

// export const {  } =
// SearchSlice.actions;
export default SearchSlice.reducer;
