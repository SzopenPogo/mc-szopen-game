import { Schema } from "mongoose";
import { ICharacterData } from "./ICharacterData";

export interface ICharacterModel extends Document, ICharacterData {
  [key: string]: any;
  _id: string;
  accountId: Schema.Types.ObjectId;
  setHealth(): Promise<void>;
  addExperience(experience: number): Promise<void>;
  setExperience(experience: number): Promise<void>;
  addLevelAndSetExperience(experience: number): Promise<void>;
  addMoney(money: number): Promise<void>
}