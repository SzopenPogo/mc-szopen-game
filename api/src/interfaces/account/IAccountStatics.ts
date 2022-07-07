import { IAccountModel } from "./IAccountModel";
import { Model } from 'mongoose';

export interface IAccountStatics extends Model<IAccountModel> {
  findByCredentials(email: string, password: string): Promise<IAccountModel>;
}