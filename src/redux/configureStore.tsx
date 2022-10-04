import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AccordionSlice from "./AccordionSlice";
import AuthenSlice from "./AuthenSlice";
import DiscoverSlice from "./DiscoverSlice";
import GlobalSlice from "./GlobalSlice";
import MusicSlice from "./MusicSlice";
import RankingSlice from "./RankingSlice";
import SearchSlice from "./SearchSlice";

const reducer = combineReducers({
  music: MusicSlice,
  authen: AuthenSlice,
  search: SearchSlice,
  discover: DiscoverSlice,
  accordion: AccordionSlice,
  ranking: RankingSlice,
  global: GlobalSlice,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(),
});

export default store;
