import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiKey } from "../apis/apiKey";
import { MusicApi } from "../apis/MusicApi";

export const Fetchdata = createAsyncThunk(
  "fetchMusic",
  async (dispatch, getState) => {
    const response = await MusicApi.getAll({
      fbclid: apiKey,
    });
    return response.data;
  }
);

const MusicSlice = createSlice({
  name: "music",
  initialState: {
    dataMusic: [],
    isLoading: false,
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Bắt đầu thực hiện action login (Promise pending)
    builder.addCase(Fetchdata.pending, (state) => {
      // Bật trạng thái loading
      state.isLoading = true;
    });

    // Khi thực hiện action Fetchdata thành công (Promise fulfilled)
    builder.addCase(Fetchdata.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataMusic = action.payload;
    });

    // Khi thực hiện action Fetchdata thất bại (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      // state.errorMessage = action.payload.message;
    });
  },
});

export default MusicSlice.reducer;
