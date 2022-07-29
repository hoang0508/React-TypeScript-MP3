import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MusicSlice from "./MusicSlice";

const reducer = combineReducers({
  music: MusicSlice,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
