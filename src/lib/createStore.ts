import { configureStore } from "@reduxjs/toolkit";

import reducers from "../reducers";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Import storage

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
