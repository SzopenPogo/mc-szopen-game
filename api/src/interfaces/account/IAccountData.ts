import mongoose from 'mongoose';
import { ICharacterModel } from '../character/ICharacterModel';
import { IToken } from "../token/IToken";

export interface IAccountData {
  email: string;
  password: string;
  isActive: boolean;
  tokens: Array<IToken>;
  characterRef: mongoose.Types.Array<ICharacterModel> | undefined;
}