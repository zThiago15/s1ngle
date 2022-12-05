import { configureStore } from '@reduxjs/toolkit';
import navBarReducer from './slices/sliceNavBar';

export default configureStore({
  reducer: {
    navbar: navBarReducer,
  },
});
