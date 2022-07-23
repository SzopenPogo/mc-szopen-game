import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "store/account/account-slice";
import authenticationSlice from "store/authentication/authentication-slice";
import clientSlice from "store/client/client-slice";
import configSlice from "store/config/config-slice";

const store = configureStore({
  reducer: {
    client: clientSlice.reducer,
    config: configSlice.reducer,
    authentication: authenticationSlice.reducer,
    account: accountSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;