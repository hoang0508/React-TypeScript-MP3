import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPlaylistDetail, getVideoDetail } from "nhaccuatui-api-full/dist";
const {
  getHome,
  getSong,
  getTopicDetail,
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

// data playList Music details
export const FectchDataPlayList: any = createAsyncThunk(
  "fetchPlayList",
  async (payload: string) => {
    const data = await getPlaylistDetail(payload);
    return data;
  }
);

// data Video details
export const FetchDataVideo: any = createAsyncThunk(
  "fetchVideo",
  async (payload: string) => {
    const data = await getVideoDetail(payload);
    return data;
  }
);

// data Topic details
export const FetchDataTopic: any = createAsyncThunk(
  "fetchTopic",
  async (payload: string) => {
    const data = await getTopicDetail(payload);
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
    dataVideo: {},
    dataTopic: {},
    dataMusicNews: {},
    dataMusicNewList: [],
    dataMusicKey: {},
    musicSongKey: undefined,
    isLoading: true,
    errorMessage: "",
    indexSong: 0,
  },
  reducers: {
    // setMusicSongKey
    setMusicSongKey: (state, action) => ({
      ...state,
      musicSongKey: action.payload,
    }),
    //setIndexSong
    setIndexSong: (state, action) => ({
      ...state,
      indexSong: action.payload,
    }),
    // setDataMusic
    setDataMusicKey: (state, action) => ({
      ...state,
      dataMusicKey: action.payload,
    }),
    // setDataMusicNews
    setDataMusicNews: (state, action) => ({
      ...state,
      dataMusicNews: action.payload,
    }),
    // setDataMusicNewList
    setDataMusicNewList: (state, action) => ({
      ...state,
      dataMusicNewList: action.payload,
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

    builder.addCase(FetchDataVideo.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataVideo = action.payload;
    });

    builder.addCase(FetchDataTopic.fulfilled, (state, action) => {
      // Tắt trạng thái loading, lưu thông tin user vào store
      state.isLoading = false;
      state.dataTopic = action.payload;
    });

    // Khi thực hiện action Fetchdata thất bại (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // Tắt trạng thái loading, lưu thông báo lỗi vào store
      state.isLoading = false;
      // state.errorMessage = action.payload.message;
    });
  },
});
export const {
  setMusicSongKey,
  setIndexSong,
  setDataMusicKey,
  setDataMusicNewList,
  setDataMusicNews,
} = MusicSlice.actions;
export default MusicSlice.reducer;
