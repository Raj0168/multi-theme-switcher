import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./slices/themeSlice";
import { productsApi } from "./api/productsApi";

// combines the reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

// wraps rootReducer to save state to local storage, so it doesnt gets lost in page refreshes
const persistedReducer = persistReducer(persistConfig, rootReducer);

// sets up the redux store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefault) =>
    getDefault({
      serializableCheck: false,
    }).concat(productsApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
