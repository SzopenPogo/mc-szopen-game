import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { IAuthRequest } from "../constants/account/IAuthRequest";
import { TOKEN_SECRET } from "../constants/account/token";
import { ITokenDecoded } from "../interfaces/token/IToken";
import Account from "../models/accountModel";
import { createErrorMessage } from "../utils/messages/createErrorMessage";

const auth = async (req: IAuthRequest, res: Response, next: NextFunction) => {
  try {
    const header = req.header('Authorization');
    
    const token = header!.split(' ')[1];
    const decoded = jwt.verify(token, TOKEN_SECRET) as ITokenDecoded;
    const account = await Account.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!account) {
      const errorMessage = createErrorMessage(404, 'Account not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    if (!account.isActive) {
      const errorMessage = createErrorMessage(500, 'Account is banned')
      await account.clearTokens();

      return res.status(errorMessage.status).send(errorMessage);
    }

    req.account = account;
    req.token = token;
    
    next();
  } catch (error) {
    const errorMessage = createErrorMessage(401, 'Unauthorized', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default auth