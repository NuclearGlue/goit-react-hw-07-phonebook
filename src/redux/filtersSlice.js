import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = '';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    changeFilter: {
      reducer(state, action) {
        return (state = action.payload);
      },
      prepare(newFilter) {
        return {
          payload: newFilter,
        };
      },
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
