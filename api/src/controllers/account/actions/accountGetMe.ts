import { Response } from "express";
import { IAuthRequest } from "../../../interfaces/account/IAuthRequest";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountGetMe = async (req: IAuthRequest, res: Response) => {
  try {
    res.status(200).send(req.account);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Fetch your account data failed', error);
    res.status(errorMessage.status).send(error);
  }
}

export default accountGetMe;