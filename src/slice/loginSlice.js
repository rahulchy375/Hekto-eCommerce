import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginData",
  initialState: {
    value: JSON.parse(localStorage.getItem("hektoLoginData")) || null,
  },
  reducers: {
    loginData: (state, action) => {
      state.value = action.payload;
    },
  },
});
// console.log(productData);

// Action creators are generated for each case reducer function
export const { loginData } = loginSlice.actions;

export default loginSlice.reducer;
