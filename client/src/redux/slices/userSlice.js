import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  clerkId: null,
  name: '',
  email: '',
  imageUrl: undefined,
  role: 'user',
  token: null,
  company: '',
  description: '',
  address: '',
  city: '',
  country: '',
  website: '',
  telephone: '',
  facebook: '',
  twitter: '',
  linkedin: '',
  otherSocial: '',
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
    toggleUserDetailsForm(state, action) {
      state.userDetailsform = action.payload; // ✅ To control visibility
    },
  },
});

export const { setUser, logoutUser, setToken, toggleUserDetailsForm } = userSlice.actions;
export default userSlice.reducer;
