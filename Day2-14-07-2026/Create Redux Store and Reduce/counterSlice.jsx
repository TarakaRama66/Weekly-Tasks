import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {
      state.value += 2;
    },

    decrement: (state) => {
      state.value -= 2;
    },

    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } =
  counterSlice.actions;

export default counterSlice.reducer;