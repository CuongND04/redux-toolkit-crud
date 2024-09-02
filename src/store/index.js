import { configureStore } from "@reduxjs/toolkit";
import {userSlice} from "../features/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer, //slice nay co ten la user trong ung dung
  },
});