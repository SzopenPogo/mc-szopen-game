import { Document } from 'mongoose';
import { IAccountData } from './IAccountData';

export interface IAccountModel extends Document, IAccountData {
  [key: string]: any;
  _id: string;
  generateAuthToken(): Promise<string>;
  clearTokens(): Promise<void>;
  editUserData(reqBody: any, allowedUpdates: Array<string>, currentPassword?: string): Promise<{
    status: number;
    message: string;
  }>;
  setInactive(): Promise<void>;
  setActive(): Promise<void>;
}

