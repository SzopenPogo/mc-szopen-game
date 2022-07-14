import mongoose, { Schema } from "mongoose";
import { IMissionData } from "../mission/IMissionData";
import { IMissionModel } from "../mission/IMissionModel";
import { ICharacterData } from "./ICharacterData";
import { ICharacterUpdateResponse, ICharacterUpdateStat } from "./ICharacterUpdate";

export interface ICharacterModel extends Document, ICharacterData {
  [key: string]: any;
  _id: string;
  accountId: Schema.Types.ObjectId;
  missionRef: mongoose.Types.Array<IMissionModel> | undefined;
  activeMissions: Array<IMissionData>;
 
  addExperience(experience: number): Promise<void>;
  addLevelAndSetExperience(experience: number): Promise<void>;
  addMoney(money: number): Promise<void>;
  addStat(updates: Array<ICharacterUpdateStat>): Promise<ICharacterUpdateResponse>;

  calculateStatPrice(updates: Array<ICharacterUpdateStat>): number;
  calculateCriticalStrikeChance(): boolean;
  calculateHealth(): number;
  calculateDamage(): number;

  setBaseDamage(value: number): Promise<void>;
  setBusy(status: boolean): Promise<void>;
  setExperience(experience: number): Promise<void>;
  setActiveMissions(missions: Array<IMissionData>): Promise<void>;

  dealCriticalDamage(): number | undefined;
  dealDamage(): number;

  takeDamage(damage: number): number;
}