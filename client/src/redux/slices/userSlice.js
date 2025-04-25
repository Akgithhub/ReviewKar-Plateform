import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clerkId: null,
  name: '',
  email: '',
  imageUrl: '',
  role: 'user',
  token: null,        // 🆕 Store the auth token
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    logoutUser() {
      return initialState;
    },
  },
});

export const { setUser, logoutUser, setToken } = userSlice.actions;
export default userSlice.reducer;
