import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    fireBaseUser: null,
    jeanieUser: null,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.fireBaseUser = action?.payload;
    },
    setLogOut: (state) => {
      state.isLoggedIn = false;
      state.fireBaseUser = null;
      state.jeanieUser = null;
    },
    setFireBaseUser: (state, action) => {
      state.fireBaseUser = action?.payload;
    },
    setUser: (state, action) => {
      state.jeanieUser = action?.payload;
    },
  },
});

export const { setUser, setLogOut, setLoggedIn, setFireBaseUser } =
  authSlice.actions;

export default authSlice.reducer;
