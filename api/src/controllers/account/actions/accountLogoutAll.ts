import { Response } from "express";
import { IAuthRequest } from "../../../constants/account/IAuthRequest";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountLogoutAll = async (req: IAuthRequest, res: Response) => {
  try {
    req.account!.clearTokens();
    res.status(200).send();
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Logout from all devices failed');
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default accountLogoutAll;