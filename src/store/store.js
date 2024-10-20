import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../slice/productSlice'
import userDataSlice from '../slice/userDataSlice'
import loginSlice from '../slice/loginSlice'

export default configureStore({
  reducer: {
    product: productSlice,
    user:userDataSlice,
    login:loginSlice,
  }
})