import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./reducers/CardSlice";
import favoriteSlice from "./reducers/FavoritesSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  card: cartSlice,
  favorite: favoriteSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
