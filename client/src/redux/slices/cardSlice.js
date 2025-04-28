// src/redux/slices/cardSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCards(state, action) {
      state.cards = action.payload;
    },
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setCards, addCard, setLoading, setError } = cardSlice.actions;
export default cardSlice.reducer;
