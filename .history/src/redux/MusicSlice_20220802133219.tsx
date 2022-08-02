import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const {
  getHome,
  //... and many other services
} = require("nhaccuatui-api-full");

export const Fetchdata: any = createAsyncThunk(
  "fetchMusic",
  async (dispatch, getState) => {
    const data = await getHome();
    return data;
  }
);

const MusicSlice = createSlice({
  name: "music",
  initialState: {
    dataMusic: {},
    dataMusicPlay: undefined,
    isLoading: false,
    errorMessage: "",
  },
  reducers: {
    setDataMusicPlay: (state, action) => ({
      ...state,
      dataMusicPlay: action.payload,
    }),
  },
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
export const { setDataMusicPlay } = MusicSlice.actions;
export default MusicSlice.reducer;
