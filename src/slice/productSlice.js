import { createSlice } from "@reduxjs/toolkit";
import productData from "../api/product.json";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
  },
  reducers: {
    addingProduct: (state, action) => {
      state.data = action.payload;
    },
  },
});
// console.log(productData);

// Action creators are generated for each case reducer function
export const { addingProduct } = productSlice.actions;

export const fetchProducts = () => (dispatch) => {
  // Asynchronously load the JSON data into Redux state
  const products = productData; // JSON data directly
  
  dispatch(addingProduct(products)); // Dispatch the action to update the state
};

export default productSlice.reducer;
