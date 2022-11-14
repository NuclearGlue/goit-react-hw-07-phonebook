import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistStorage = {
  key: 'contacts',
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistStorage, contactsReducer),
    filter: filtersReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
