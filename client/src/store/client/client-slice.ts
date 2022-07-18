import { createSlice } from "@reduxjs/toolkit";
import { MOBILE_WIDTH } from "data/constants/client/dimensions";

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    isMobile: false
  },
  reducers: {
    setMobile(state, action) {
      state.isMobile = action.payload <= MOBILE_WIDTH;
    }
  }
});

export const clientActions = clientSlice.actions;
export default clientSlice;