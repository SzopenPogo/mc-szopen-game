import { Response } from "express";
import { IAuthMissionRequest } from "../../interfaces/mission/IAuthMissionRequest";
import Mission from "../../models/missionModel";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";

const getActiveMission = async (req: IAuthMissionRequest, res: Response) => {
  try {
    const character = req.character!;
    
    const missionInProgress = await Mission.findOne({
      characterId: character._id,
      isCompleted: false
    });

    if(!missionInProgress) {
      const errorMessage = createErrorMessage(404, 'Active mission not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    res.status(200).send(missionInProgress);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get active mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getActiveMission;