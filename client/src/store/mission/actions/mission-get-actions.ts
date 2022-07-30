import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { MISSION_FAIL, MISSION_REQUEST, MISSION_SUCCESS } from "data/constants/mission/mission";
import { MISSION_RANDOM_BACKEND_ROUTER } from "data/routes/backend/mission";
import { missionActions } from "store/mission/mission-slice";

export const getMissions = (token: string, characterId: string) => async (dispatch: Dispatch) => {
  dispatch(missionActions.get({type: MISSION_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      characterId
    }
  }

  const getMissionsRequest = async () => {
    return await axios.get(MISSION_RANDOM_BACKEND_ROUTER, config);
  }

  try {
    const {data} = await getMissionsRequest();

    dispatch(missionActions.get({
      type: MISSION_SUCCESS,
      payload: data
    }));
  } catch (error: any) {
    dispatch(missionActions.get({
      type: MISSION_FAIL,
      payload: error.response.data.message
    }))
  }
}