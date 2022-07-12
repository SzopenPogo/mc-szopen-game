import { Response } from "express";
import { IAuthRequest } from "../../constants/account/IAuthRequest";
import { MISSION_LIST } from "../../constants/mission/missionList";
import { IMissionData } from "../../interfaces/mission/IMissionData";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";
import generateRandomNumbers from "../../utils/random/generateRandomNumbers";

const getRandomMission = async (req: IAuthRequest, res: Response) => {
  try {
    const missionIndexes = generateRandomNumbers(3, MISSION_LIST.length) as Array<number>;
    const missions = missionIndexes.map(missionIndex => MISSION_LIST[missionIndex]);
    
    res.status(200).send(missions);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getRandomMission;