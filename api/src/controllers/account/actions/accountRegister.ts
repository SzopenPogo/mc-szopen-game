import { Request, Response } from "express";
import { IAccountAccessData } from "../../../interfaces/account/IAccountAccessData";
import Account from "../../../models/accountModel";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountRegister = async (req: Request, res: Response) => {
  try {
    const userData = req.body as IAccountAccessData;
    
    const account = new Account(userData);
    await account.save();

    const token = await account.generateAuthToken();

    res.status(201).send({account, token})
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Register account failed!', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default accountRegister;