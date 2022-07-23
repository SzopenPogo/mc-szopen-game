import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { CONFIG_BACKEND_ROUTER } from "data/routes/backend/config";
import { CONFIG_FAIL, CONFIG_REQUEST, CONFIG_SUCCESS } from "data/constants/config/config";
import { configActions } from "store/config/config-slice";

export const getConfig = () => async (dispatch: Dispatch) => {
  dispatch(configActions.get({type: CONFIG_REQUEST}));
  
  const getConfigRequest = async () => {
    return axios.get(CONFIG_BACKEND_ROUTER);
  }

  try {
    const {data} = await getConfigRequest();
    dispatch(configActions.get({
      type: CONFIG_SUCCESS,
      payload: data
    }))
  } catch (error: any) {
    dispatch(configActions.get({
      type: CONFIG_FAIL,
      payload: error.response.data.message
    }))
  }
}