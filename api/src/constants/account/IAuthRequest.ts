import { Request } from "express";
import { IAccountModel } from "../../interfaces/account/IAccountModel";

export interface IAuthRequest extends Request {
  account?: IAccountModel;
  token?: string;
}