import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
  name: "response",
  initialState: {
    responses: [],
  },
  reducers: {
    addResponse: (state, action) => {
      let temp = action.payload;
      state.responses.push(temp);
    },
  },
});

export const { addResponse } = responseSlice.actions;
export default responseSlice.reducer;
