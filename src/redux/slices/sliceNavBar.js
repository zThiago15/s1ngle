import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'navbar',
  initialState: {
    showNavBar: false,
  },
  reducers: {
    changeStateNavbar(state, { payload }) {
      return { ...state, showNavBar: payload };
    },
  },
});

export const { changeStateNavbar } = slice.actions;

export const selectShowNavbar = (state) => state.navbar;

export default slice.reducer;
