import { createSlice } from "@reduxjs/toolkit";
import { CHARACTER_FAIL, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "data/constants/character/character";
import { Character } from "data/interfaces/character/Character";

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    loading: false,
    error: '',
    actionType: '',
    characters: [] as Array<Character>,
    character: {} as Character,
    isCreateMode: false
  },
  reducers: {
    get(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case CHARACTER_REQUEST:
          state.loading = true;
          state.error = '';
          state.actionType = CHARACTER_REQUEST;
          break;
        case CHARACTER_SUCCESS:
          state.loading = false;
          state.error = '';
          state.characters = payload;
          state.actionType = CHARACTER_SUCCESS;
          break;
        case CHARACTER_FAIL:
          state.loading = false;
          state.error = payload;
          state.characters = [];
          state.character._id = '';
          state.actionType = CHARACTER_FAIL;
          break;
      }
    },
    select(state, action) {
      const _id = action.payload;
      const character = state.characters.filter(character => character._id === _id);
      
      state.character = character[0];
    },
    setCreateMode(state, action) {
      state.isCreateMode = action.payload;
    },
    create(state, action) {
      const { type, payload } = action.payload;
      
      switch (type) {
        case CHARACTER_REQUEST:
          state.loading = true;
          state.error = '';
          state.actionType = CHARACTER_REQUEST;
          break;
        case CHARACTER_SUCCESS:
          state.loading = false;
          state.error = '';
          state.characters.push(payload);
          state.character = payload;
          state.actionType = CHARACTER_SUCCESS;
          break;
        case CHARACTER_FAIL:
          state.loading = false;
          state.error = payload;
          state.actionType = CHARACTER_FAIL;
          break;
      }
    }
  }
})

export const characterActions = characterSlice.actions;
export default characterSlice;