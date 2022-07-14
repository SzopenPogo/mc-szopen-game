import { Response } from "express";
import { IAuthRequest } from "../../../interfaces/account/IAuthRequest";
import { IToken } from "../../../interfaces/token/IToken";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountLogout = async (req: IAuthRequest, res: Response) => {
  try {
    //Remove token from account tokens array (if contains token passed by request -> auth)
    req.account!.tokens = req.account!.tokens.filter((token: IToken) => {
      return token.token !== req.token;
    });

    await req.account!.save();
    res.status(200).send();
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Logout failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default accountLogout;