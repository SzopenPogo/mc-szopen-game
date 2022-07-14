import { Response } from "express";
import { IAuthRequest } from "../../interfaces/account/IAuthRequest";
import Character from "../../models/characterModel";
import formatName from "../../utils/format/formatName";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const characterCreate = async (req: IAuthRequest, res: Response) => {
  try {
    const characterName = formatName(req.body.name);
    
    const characterData = {
      accountId: req.account!._id,
      name: characterName
    }

    //Check if character with this name is already in databse
    const isCharacterCreated = !!await Character.findOne({name: characterName});
    
    if(isCharacterCreated) {
      const errorMessage = createErrorMessage(409, 'Character with this name already exist');
      return res.status(errorMessage.status).send(errorMessage);
    }
    
    const character = new Character(characterData);
    await character.save();

    res.status(201).send(character)
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Create character failed!', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default characterCreate;