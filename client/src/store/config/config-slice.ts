import { createSlice } from "@reduxjs/toolkit";
import { CONFIG_FAIL, CONFIG_REQUEST, CONFIG_SUCCESS } from "data/constants/config/config";

const configSlice = createSlice({
  name: 'config',
  initialState: {
    loading: false,
    error: null,
    configData: {
      PASSWORD_REG_EXP: '',
      PASSWORD_MIN_LENGTH: 1,
      CHARACTER_EXPERIENCE_LVL_MULTIPLIER: 120,
      CHARACTER_NAME_MIN_LENGHT: 1,
      CHARACTER_NAME_MAX_LENGHT: 1,
      CHARACTER_STAT_PRICE_MULTIPLIER: 1
    }
  },
  reducers: {
    get(state, action) {
      const { type, payload } = action.payload;

      switch (type) {
        case CONFIG_REQUEST:
          state.loading = true;
          state.error = null;
          break;
        case CONFIG_SUCCESS:
          state.loading = false;
          state.error = null;
          state.configData = payload;
          break;
        case CONFIG_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    }
  }
});

export const configActions = configSlice.actions;
export default configSlice;