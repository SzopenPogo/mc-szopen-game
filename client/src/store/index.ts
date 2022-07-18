import { configureStore } from "@reduxjs/toolkit";
import clientSlice from "store/client/client-slice";

const store = configureStore({
  reducer: {
    client: clientSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;