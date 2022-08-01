import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { MISSION_FAIL, MISSION_REQUEST, MISSION_SUCCESS } from "data/constants/mission/mission";
import { MISSION_START_BACKEND_ROUTER } from "data/routes/backend/mission";
import { missionActions } from "store/mission/mission-slice";

export const startMission = (
  token: string, 
  characterId: string,
  characterActiveMissionIndex: number
) => async (dispatch: Dispatch) => {
  dispatch(missionActions.start({type: MISSION_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      characterId
    }
  }

  const requestData = {
    characterActiveMissionIndex
  }
  
  const startMissionRequest = async () => {
    return await axios.post(MISSION_START_BACKEND_ROUTER, requestData, config);
  }

  try {
    const {data} = await startMissionRequest();

    dispatch(missionActions.start({
      type: MISSION_SUCCESS,
      payload: data
    }));
    
  } catch (error: any) {
    dispatch(missionActions.start({
      type: MISSION_FAIL,
      payload: error.response.data.message
    }))
  }
}