import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const contactsConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
};

const persistedContactsReducer = persistReducer(contactsConfig, 
    contactsReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);