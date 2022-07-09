import { Response } from "express";
import { IAuthRequest } from "../../constants/account/IAuthRequest";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const characterGetMyById = async (req: IAuthRequest, res: Response) => {
  try {
    await req.account?.populate('characterRef');

    const accountCharacter = req.account?.characterRef?.filter(character => 
      character._id.toString() === req.params.id);
    
    if(!accountCharacter || accountCharacter!.length <= 0) {
      const errorMessage = createErrorMessage(404, 'Character not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    res.status(200).send(accountCharacter[0]); 
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get your character failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default characterGetMyById;