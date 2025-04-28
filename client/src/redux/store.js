// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cardReducer from './slices/cardSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer,
  },
});

export default store;
