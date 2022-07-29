import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { CHARACTER_FAIL, CHARACTER_REQUEST, CHARACTER_SUCCESS } from "data/constants/character/character";
import { CHARACTER_BUY_STAT_BACKEND_ROUTER } from "data/routes/backend/character";
import { characterActions } from "store/character/character-slice";

export const characterBuyStat = (
  token: string,
  _id: string,
  statName: string,
  amount: number
) => async (dispatch: Dispatch) => {
  dispatch(characterActions.buyStat({type: CHARACTER_REQUEST}));

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const requestData = [{
    statName,
    amount
  }];

  const characterBuyStatRequest = async () => {
    const buyStatUrl = `${CHARACTER_BUY_STAT_BACKEND_ROUTER}/${_id}`;
    return await axios.post(buyStatUrl, requestData, config);
  }

  try {
    const {data} = await characterBuyStatRequest();
    const {character} = data;

    dispatch(characterActions.buyStat({
      type: CHARACTER_SUCCESS,
      payload: character
    }));
  } catch (error: any) {
    dispatch(characterActions.buyStat({
      type: CHARACTER_FAIL,
      payload: error.response.data.message
    }))
  }
}