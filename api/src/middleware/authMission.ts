import { NextFunction, Response } from "express";
import { Types } from "mongoose";
import { IAuthMissionRequest } from "../interfaces/mission/IAuthMissionRequest";
import Character from "../models/characterModel";
import { createErrorMessage } from "../utils/messages/createErrorMessage";


const authMission = async (req: IAuthMissionRequest, res: Response, next: NextFunction) => {

  //Check if characterId is passed in header
  const characterId = req.header('characterId')
  if(!characterId) {
    const errorMessage = createErrorMessage(400, 'Character ID required');
    return res.status(errorMessage.status).send(errorMessage);
  }

  //Check if characterId can be parsed into ObjectId
  if(!Types.ObjectId.isValid(characterId)) {
    const errorMessage = createErrorMessage(400, 'Invalid ID format');
    return res.status(errorMessage.status).send(errorMessage);
  }

  //Check if character exist in database and is assigned to account 
  const character = await Character.findOne({accountId: req.account?._id, _id: characterId});
  if(!character) {
    const errorMessage = createErrorMessage(404, 'Character not found');
    return res.status(errorMessage.status).send(errorMessage);
  }

  req.character = character;
  
  next();
}

export default authMission;