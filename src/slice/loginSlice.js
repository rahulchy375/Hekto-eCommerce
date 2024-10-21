import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginSlice = createSlice({
  name: "loginData",
  initialState: {
    value: JSON.parse(localStorage.getItem("hektoLoginData")) || null,
  },
  reducers: {
    loginData: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) =>{
      state.value = null;
      localStorage.removeItem("hektoLoginData")
      toast.success("Log Out Successful!");
    }
  },
});
// console.log(productData);

// Action creators are generated for each case reducer function
export const { loginData, logOut } = loginSlice.actions;

export default loginSlice.reducer;
