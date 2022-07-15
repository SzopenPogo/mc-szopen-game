import { Schema } from "mongoose";
import { Document } from 'mongoose';
import { ICharacterModel } from "../character/ICharacterModel";
import { IEnemyCombat } from "./IEnemyCombat";
import { IEnemyData } from "./IEnemyData";

export interface IEnemyModel extends Document, IEnemyData {
  [key: string]: any;
  _id: string;
  missionId: Schema.Types.ObjectId;
  isDefeated: boolean;
  combatLog: Array<IEnemyCombat>

  calculateHealth(characterHealth: number): number;
  calculateLevel(characterLvl: number): number;
  calculateDamage(characterDamage: number): {minDamage: number, maxDamage: number};

  setData(
    characterHealth: number, 
    characterLvl: number, 
    characterDamage: number
  ): void;
  setDefeated(): Promise<void>;

  dealDamage(): number;
  fight(character: ICharacterModel): Promise<boolean>;
}