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
  "fetchSong",
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
    isShowModal: false,
    errorMessage: "",
    indexSong: 0,
    itemFavorite: "",
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
    //set isShowModal
    setIsShowModal: (state, action) => ({
      ...state,
      isShowModal: action.payload,
    }),
    // setfavorite
    setItemFavorite: (state, action) => ({
      ...state,
      itemFavorite: action.payload,
    }),
  },
  extraReducers: (builder) => {
    // B???t ?????u th???c hi???n action login (Promise pending)
    builder.addCase(Fetchdata.pending, (state) => {
      // B???t tr???ng th??i loading
      state.isLoading = true;
    });

    // Khi th???c hi???n action Fetchdata th??nh c??ng (Promise fulfilled)
    builder.addCase(Fetchdata.fulfilled, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng tin user v??o store
      state.isLoading = false;
      state.dataMusic = action.payload;
    });

    builder.addCase(FetchDataSong.fulfilled, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng tin user v??o store
      state.isLoading = false;
      state.dataMusicSong = action.payload;
    });

    builder.addCase(FectchDataPlayList.fulfilled, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng tin user v??o store
      state.isLoading = false;
      state.dataPlayList = action.payload;
    });

    builder.addCase(FetchDataVideo.fulfilled, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng tin user v??o store
      state.isLoading = false;
      state.dataVideo = action.payload;
    });

    builder.addCase(FetchDataTopic.fulfilled, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng tin user v??o store
      state.isLoading = false;
      state.dataTopic = action.payload;
    });

    // Khi th???c hi???n action Fetchdata th???t b???i (Promise rejected)
    builder.addCase(Fetchdata.rejected, (state, action) => {
      // T???t tr???ng th??i loading, l??u th??ng b??o l???i v??o store
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
  setIsShowModal,
  setItemFavorite,
} = MusicSlice.actions;
export default MusicSlice.reducer;
