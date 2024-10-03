import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
  },
  reducers: {
    addingProduct: (state,action) =>{
        state.data = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { addingProduct } = productSlice.actions

export default productSlice.reducer