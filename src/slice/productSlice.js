import { createSlice } from "@reduxjs/toolkit";
import productData from "../api/product.json";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    cart: JSON.parse(localStorage.getItem("hektoCart")) || [],
  },
  reducers: {
    addingProduct: (state, action) => {
      state.data = action.payload;
    },

    addingProductToCart: (state, action) =>{
      // state.cart = action.payload;

      let addingCartProduct = state.cart.findIndex((item)=>item.id === action.payload.id)
      if (addingCartProduct !== -1) {
        state.cart[addingCartProduct].qan += 1;
        localStorage.setItem("hektoCart", JSON.stringify(state.cart));
        console.log(state.cart);
      } else{
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("hektoCart", JSON.stringify(state.cart));
      }
    },

    addingProductToCartFromShop: (state, action) =>{
      // state.cart = action.payload;

      let addingCartProduct = state.cart.findIndex((item)=>item.id === action.payload.id)
      if (addingCartProduct !== -1) {
        state.cart[addingCartProduct].qan += 1;
        localStorage.setItem("hektoCart", JSON.stringify(state.cart));
        console.log(state.cart);
      } else{
        state.cart = [...state.cart, action.payload];
        localStorage.setItem("hektoCart", JSON.stringify(state.cart));
      }
    },

    decrement: (state,action) =>{
      if (state.cart[action.payload].qan > 1) {
        state.cart[action.payload].qan -= 1;
        localStorage.setItem("hektoCart", JSON.stringify(state.cart))
      }
    },

    increment:(state,action) =>{
      if (state.cart[action.payload].qan < state.cart[action.payload].quantity) {
        state.cart[action.payload].qan += 1;
        localStorage.setItem("hektoCart", JSON.stringify(state.cart))
      }
    },

    removeProduct:(state, action) =>{
      state.cart.splice(action.payload, 1);
      localStorage.setItem("hektoCart", JSON.stringify(state.cart))
    },

    clearCart:(state, action) =>{
      state.cart.splice(action.payload, state.cart.length);
      localStorage.setItem("hektoCart", JSON.stringify(state.cart))
    }
  },
});
// console.log(productData);

// Action creators are generated for each case reducer function
export const { addingProduct, addingProductToCart, decrement, increment, removeProduct, clearCart, addingProductToCartFromShop } = productSlice.actions;

export const fetchProducts = () => (dispatch) => {
  // Asynchronously load the JSON data into Redux state
  const products = productData; // JSON data directly
  
  dispatch(addingProduct(products)); // Dispatch the action to update the state
};

export default productSlice.reducer;
