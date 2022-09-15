import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    user: localStorage.getItem("user") || null,
    loading: false,
    error: null,
  },

  name: "auth",
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
      state.user = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
    },
  },
});


export const { loginStart, loginSuccess, loginFail } = authSlice.actions;
export default authSlice.reducer;
