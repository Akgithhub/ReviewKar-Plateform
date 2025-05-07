// src/redux/slices/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCards(state, action) {
      return {
        ...state,
        ...action.payload,
      };
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
    categoryCardsCount(state, action) {
      state.categoryCardsCount = action.payload;
    },
  },
});

export const { setCards, addCard, setLoading, setError, categoryCardsCount } = cardSlice.actions;
export default cardSlice.reducer;
