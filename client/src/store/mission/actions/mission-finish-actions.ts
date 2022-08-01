import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { MISSION_FAIL, MISSION_REQUEST, MISSION_SUCCESS } from "data/constants/mission/mission";
import { MISSION_FINISH_BACKEND_ROUTER } from "data/routes/backend/mission";
import { missionActions } from "store/mission/mission-slice";

export const finishMission = (
  token: string,
  characterId: string,
  missionId: string
) => async (dispatch: Dispatch) => {
  dispatch(missionActions.finish({type: MISSION_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      characterId
    }
  }

  const finishMissionRequest = async () => {
    const finishMissionUrl = `${MISSION_FINISH_BACKEND_ROUTER}/${missionId}`;
    return await axios.post(finishMissionUrl, {}, config)
  }

  try {
    const {data} = await finishMissionRequest();

    dispatch(missionActions.finish({
      type: MISSION_SUCCESS,
      payload: data
    }));
  } catch (error: any) {
    dispatch(missionActions.finish({
      type: MISSION_FAIL,
      payload: error.response.data.message
    }))
  }
}