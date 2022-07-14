import { Response } from "express";
import { IAuthMissionRequest } from "../../interfaces/mission/IAuthMissionRequest";
import Mission from "../../models/missionModel";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";
import getUnixTime from "../../utils/time/getUnixTime";

const finishMission = async (req: IAuthMissionRequest, res: Response) => {
  try {
    const character = req.character!;
    const missionId = req.params.id;

    const mission = await Mission.findById(missionId);

    if(!mission) {
      const errorMessage = createErrorMessage(404, 'Mission not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    const actualUnixTime = getUnixTime();
    const finishTime = mission.finishUnixTime;

    //Check if mission isn't completed
    if(finishTime > actualUnixTime) {
      const errorMessage = createErrorMessage(404, 'Can\'t finish mission yet');
      return res.status(errorMessage.status).send(errorMessage);
    }

    const {reward} = mission;

    await mission.finishMission();
    await character.setBusy(false);
    // GENERATE BOSS FIGHT. IF WIN DO:
    // await character.setExperience(reward.experience);
    // await character.addMoney(reward.money);

    res.status(200).send(character);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Finish mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default finishMission;