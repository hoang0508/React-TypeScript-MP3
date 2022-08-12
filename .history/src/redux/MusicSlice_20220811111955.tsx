import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlaylistDetail } from "nhaccuatui-api-full/dist";
const {
  getHome,
  getSong,
  //... and many other services
} = require("nhaccuatui-api-full");

// data music
export const Fetchdata: any = createAsyncThunk(
  "fetchMusic",
  async (dispatch, getState) => {
    const data = await getHome();
    return data;
  }
);

// data music song
export const FetchDataSong: any = createAsyncThunk(
  "",
  async (payload: string) => {
    const data = await getSong(payload);
    return data;
  }
);

// data playList Music
export const FectchDataPlayList: any = createAsyncThunk(
  "fetchPlayList",
  async (payload: string) => {
    const data = await getPlaylistDetail(payload);
    return data;
  }
);

// music
const MusicSlice = createSlice({
  name: "music",
  initialState: {
    dataMusic: {},
    dataMusicSong: {},
    dataPlayList: {},
    musicSongKey: undefined,
    isLoading: false,
    errorMessage: "",
    indexSong: 0,
  },
  reducers: {
    setMusicSongKey: (state, action) => ({
      ...state,
      musicSongKey: action.payload,
    }),
    setIndexSong: (state, action) => ({
      ...state,
      indexSong: action.payload,
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

    builder.addCase(FetchDataSong.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataMusicSong = action.payload;
    });

    builder.addCase(FectchDataPlayList.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataPlayList = action.payload;
    });

    // Khi thực hiện action Fetchdata thất bại (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      // state.errorMessage = action.payload.message;
    });
  },
});
export const { setMusicSongKey, setIndexSong } = MusicSlice.actions;
export default MusicSlice.reducer;
