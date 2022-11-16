import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';
import { configureStore } from '@reduxjs/toolkit';





export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});


