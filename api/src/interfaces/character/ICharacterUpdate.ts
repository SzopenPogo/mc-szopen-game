import { ICharacterModel } from "./ICharacterModel";

export interface ICharacterUpdateStat {
  statName: string;
  amount: number;
}

export interface ICharacterUpdateResponse {
  message: {
    status: number;
    message: string;
  }
  character: ICharacterModel;
}