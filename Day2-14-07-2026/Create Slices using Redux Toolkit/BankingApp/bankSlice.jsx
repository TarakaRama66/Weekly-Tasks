import { createSlice } from "@reduxjs/toolkit";

const bankSlice = createSlice({
  name: "bank",

  initialState: {
    balance: 5000,
  },

  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },

    withdraw: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
      } else {
        alert("Insufficient Balance");
      }
    },

    resetBalance: (state) => {
      state.balance = 5000;
    },
  },
});

export const { deposit, withdraw, resetBalance } =
  bankSlice.actions;

export default bankSlice.reducer;