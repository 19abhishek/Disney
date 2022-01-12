import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../movie/movieSlice";
import userReducer from "../user/userSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
