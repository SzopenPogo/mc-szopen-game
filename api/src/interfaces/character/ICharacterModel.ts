import { Schema } from "mongoose";
import { ICharacterData } from "./ICharacterData";

export interface ICharacterModel extends Document, ICharacterData {
  [key: string]: any;
  _id: string;
  accountId: Schema.Types.ObjectId;
}