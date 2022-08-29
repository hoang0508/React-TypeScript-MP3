import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AuthenSlice from "./AuthenSlice";
import DiscoverSlice from "./DiscoverSlice";
import MusicSlice from "./MusicSlice";
import SearchSlice from "./SearchSlice";

const reducer = combineReducers({
  music: MusicSlice,
  authen: AuthenSlice,
  search: SearchSlice,
  discover: DiscoverSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
