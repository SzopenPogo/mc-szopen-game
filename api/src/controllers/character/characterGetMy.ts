import { Response } from "express";
import { IAuthRequest } from "../../interfaces/account/IAuthRequest";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const characterGetMy = async (req: IAuthRequest, res: Response) => {
  try {
    await req.account?.populate('characterRef');

    const accountCharacters = req.account?.characterRef

    if(!accountCharacters || accountCharacters!.length <= 0) {
      const errorMessage = createErrorMessage(404, 'Characters not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    res.status(200).send(accountCharacters);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get your characters failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default characterGetMy;