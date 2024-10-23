import { createSlice } from "@reduxjs/toolkit";
import blogData from "../api/blog.json";
import { toast } from "react-toastify";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    data: [],
  },
  reducers: {
    blogs: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { blogs } = blogSlice.actions;

export const fetchBlogs = () => (dispatch) => {
  // Asynchronously load the JSON data into Redux state
  const allBlogs = blogData; // JSON data directly
  
  dispatch(blogs(allBlogs)); // Dispatch the action to update the state
};

export default blogSlice.reducer;
