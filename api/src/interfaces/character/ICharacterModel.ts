import mongoose, { Schema } from "mongoose";
import { IMissionModel } from "../mission/IMissionModel";
import { ICharacterData } from "./ICharacterData";
import { ICharacterUpdateResponse, ICharacterUpdateStat } from "./ICharacterUpdate";

export interface ICharacterModel extends Document, ICharacterData {
  [key: string]: any;
  _id: string;
  accountId: Schema.Types.ObjectId;
  missionRef: mongoose.Types.Array<IMissionModel> | undefined;
  calculateHealth(): number;
  addExperience(experience: number): Promise<void>;
  setExperience(experience: number): Promise<void>;
  addLevelAndSetExperience(experience: number): Promise<void>;
  addMoney(money: number): Promise<void>;
  addStat(updates: Array<ICharacterUpdateStat>): Promise<ICharacterUpdateResponse>;
  calculateStatPrice(updates: Array<ICharacterUpdateStat>): number;
  calculateCriticalStrikeChance(): boolean;
  dealCriticalDamage(): number | undefined;
  calculateDamage(): number;
  setBaseDamage(value: number): Promise<void>;
  setBusy(status: boolean): Promise<void>;
}