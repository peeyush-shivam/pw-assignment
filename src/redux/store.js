import { configureStore } from "@reduxjs/toolkit";
import responseSlice from "./responseSlice/responseSlice";

const store = configureStore({
  reducer: {
    responseData: responseSlice,
  },
});

export default store;
