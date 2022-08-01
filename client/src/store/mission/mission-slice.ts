import { createSlice } from "@reduxjs/toolkit";
import { MISSION_FAIL, MISSION_REQUEST, MISSION_SUCCESS } from "data/constants/mission/mission";
import { CompletedMission } from "data/interfaces/mission/CompletedMission";
import { Mission } from "data/interfaces/mission/Mission";
import { MissionData } from "data/interfaces/mission/MissionData";

const missionSlice = createSlice({
  name: 'mission',
  initialState: {
    loading: false,
    error: '',
    missions: [] as Array<MissionData>,
    activeMission: {} as Mission,
    completedMission: {} as CompletedMission
  },
  reducers: {
    get(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case MISSION_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case MISSION_SUCCESS:
          state.loading = false;
          state.error = '';
          state.missions = payload;
          break;
        case MISSION_FAIL:
          state.loading = false;
          state.error = payload;
          state.missions = [];
          break;
      }
    },
    start(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case MISSION_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case MISSION_SUCCESS:
          state.loading = false;
          state.error = '';
          state.activeMission = payload;

          break;
        case MISSION_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    },
    getActive(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case MISSION_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case MISSION_SUCCESS:
          state.loading = false;
          state.error = '';
          state.activeMission = payload;
          break;
        case MISSION_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    },
    finish(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case MISSION_REQUEST:
          state.loading = true;
          state.error = '';
          break;
        case MISSION_SUCCESS:
          state.loading = false;
          state.error = '';
          state.completedMission = payload;
          state.activeMission._id = ''
          break;
        case MISSION_FAIL:
          state.loading = false;
          state.error = payload;
          break;
      }
    }
  }
});

export const missionActions = missionSlice.actions;
export default missionSlice;