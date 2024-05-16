import { createSlice } from "@reduxjs/toolkit";

export const telehealthSlice = createSlice({
  name: "telehealth",
  initialState: {
    isStarted: false,
    isFloating: false,
    setDetails: 'All',
    isEnded: false,
    notes:[],
  },
  reducers: {
    setIsStarted: (state) => {
      state.isStarted = true;
    },
    setIsEnded: (state) => {
      state.isStarted = false;
      state.isEnded = true;
    },
    setFloating: (state, action) => {
      state.isFloating = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setExpanded: (state) => {
      state.isFloating = false;
    },
    setDetailsShow: (state, action) => {
      state.setDetails = action.payload;
    },
    setCallReset: (state) => {
      state.isStarted = false;
      state.isFloating = false;
      state.setDetails = "All";
      state.isEnded = false;
    },
  },
});

export const {
  setIsStarted,
  setFloating,
  setIsEnded,
  setExpanded,
  setCallReset,
  setDetailsShow,
  setNotes,
} = telehealthSlice.actions;

export default telehealthSlice.reducer;
