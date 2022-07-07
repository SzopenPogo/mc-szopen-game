import { Request, Response } from "express";
import { IAccountAccessData } from "../../../interfaces/account/IAccountAccessData";
import Account from "../../../models/accountModel";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountLogin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as IAccountAccessData;
    const account = await Account.findByCredentials(email, password);

    if (!account.isActive) {
      const errorMessage = createErrorMessage(500, 'Account banned');
      return res.status(errorMessage.status).send(errorMessage);
    }

    const token = await account.generateAuthToken();

    res.status(200).send({ account, token });
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Login failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default accountLogin;