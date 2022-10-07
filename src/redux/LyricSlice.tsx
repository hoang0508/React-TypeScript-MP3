import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLyric } from "nhaccuatui-api-full/dist";

export const fetchDatLyric: any = createAsyncThunk(
  "fetchLyric",
  async (payload: string) => {
    const data = await getLyric(payload);
    return data;
  }
);

const LyricSlice = createSlice({
  name: "lyric",
  initialState: {
    isLoading: true,
    dataLyric: {},
    dataShareLyricSong: {},
  },
  reducers: {
    setDataShareLyricSong: (state, action) => ({
      ...state,
      dataShareLyricSong: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDatLyric.pending, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = true;
    });

    builder.addCase(fetchDatLyric.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataLyric = action.payload;
    });
  },
});

export const { setDataShareLyricSong } = LyricSlice.actions;
export default LyricSlice.reducer;
