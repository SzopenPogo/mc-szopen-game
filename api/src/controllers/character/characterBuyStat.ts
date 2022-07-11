import { Response } from "express";
import { IAuthRequest } from "../../constants/account/IAuthRequest";
import { ICharacterUpdateResponse, ICharacterUpdateStat } from "../../interfaces/character/ICharacterUpdate";
import Character from "../../models/characterModel";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const characterBuyStat = async (req: IAuthRequest, res: Response) => {
  try {
    const updates = req.body as Array<ICharacterUpdateStat>
    const account = req.account!;
    const character = await Character.findById(req.params.id);

    //Check if character exist
    if(!character) {
      const errorMessage = createErrorMessage(404, 'Character not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    //Check if character is assigned to authenticated account
    const isCharacterAssignedToAccount = account._id.toString() === character.accountId.toString();
    if(!isCharacterAssignedToAccount) {
      const errorMessage = createErrorMessage(500, 'Character must be assigned to your account!');
      return res.status(errorMessage.status).send(errorMessage);
    }

    
    //Check if character have enough money to buy updates 
    const updateTotalPrice = character.calculateStatPrice(updates);
    if(character.money - updateTotalPrice < 0) {
      const errorMessage = createErrorMessage(500, 'You don\'t have enough money!');
      const message: ICharacterUpdateResponse = {
        message: errorMessage,
        character
      }
      return res.status(errorMessage.status).send(message);
    }

    //Take money for updates
    await character.addMoney(-updateTotalPrice);

    //Update Character
    const updatedCharacter = await character.addStat(updates);

    res.status(updatedCharacter.message.status).send(updatedCharacter);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Buy stat failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default characterBuyStat;