import { Schema } from "mongoose";
import { Document } from 'mongoose';
import { IMissionData } from "./IMissionData";

export interface IMissionModel extends Document, IMissionData {
  [key: string]: any;
  _id: string;
  characterId: Schema.Types.ObjectId;
  isCompleted: boolean;
  startUnixTime: number;
  finishUnixTime: number;
  finishMission(): Promise<void>;
}