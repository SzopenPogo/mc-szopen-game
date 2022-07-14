import { Request } from "express";
import { IAccountModel } from "./IAccountModel";

export interface IAuthRequest extends Request {
  account?: IAccountModel;
  token?: string;
}