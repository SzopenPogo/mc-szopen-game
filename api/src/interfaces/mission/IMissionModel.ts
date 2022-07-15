import mongoose, { Schema } from "mongoose";
import { Document } from 'mongoose';
import { ICharacterModel } from "../character/ICharacterModel";
import { IEnemyModel } from "../enemy/IEnemyModel";
import { IMissionData } from "./IMissionData";

export interface IMissionModel extends Document, IMissionData {
  [key: string]: any;
  _id: string;
  characterId: Schema.Types.ObjectId;
  enemyRef: mongoose.Types.Array<IEnemyModel> | undefined;
  isCompleted: boolean;
  isSuccess: boolean;
  startUnixTime: number;
  finishUnixTime: number;
  finishMission(isSuccess: boolean): Promise<void>;
  generateEnemy(character: ICharacterModel): Promise<void>;
}