import { configureStore } from "@reduxjs/toolkit";
import addfavReducer from '../Components/MealItemSlice.jsx'
export const store = configureStore({
  reducer: {
    addfAV:addfavReducer,
  },
});