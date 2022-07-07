import { Response } from "express";
import { IAuthRequest } from "../../../constants/account/IAuthRequest";
import { createErrorMessage } from "../../../utils/messages/createErrorMessage";

const accountEdit = async (req: IAuthRequest, res: Response) => {
  try {
    const allowedUpdates = ['email', 'password'];

    const updatedAccount = await req.account?.editUserData(req.body, allowedUpdates, req.body.currentPassword);
    
    const outputData = updatedAccount!.status === 200 ? req.account : updatedAccount?.message;
    res.status(updatedAccount!.status).send(outputData);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Edit account data failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default accountEdit;