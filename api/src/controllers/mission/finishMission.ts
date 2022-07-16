import { Response } from "express";
import { IAuthMissionRequest } from "../../interfaces/mission/IAuthMissionRequest";
import Enemy from "../../models/enemyModel";
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
      const errorMessage = createErrorMessage(400, 'Can\'t finish mission yet');
      return res.status(errorMessage.status).send(errorMessage);
    }

    //Check if mission is completed
    if(mission.isCompleted) {
      const errorMessage = createErrorMessage(400, 'Mission is completed');
      return res.status(errorMessage.status).send(errorMessage);
    }

    //Find generated enemy
    const enemy = await Enemy.findOne({missionId: mission._id});
    if(!enemy) {
      //Finish Mission
      await mission.finishMission(false);
      await character.setBusy(false);

      const errorMessage = createErrorMessage(404, 'Enemy not found');
      return res.status(errorMessage.status).send(errorMessage); 
    }

    const isCharacterWin = await enemy.fight(character);
    const {reward} = mission;
    
    //If character win add reward
    if(isCharacterWin) {
      await character.addExperience(reward.experience);
      await character.addMoney(reward.money);
    }

    //Finish Mission
    await mission.finishMission(isCharacterWin);
    await character.setBusy(false);

    const responseMessage = {
      reward, 
      isCompleted: mission.isCompleted, 
      isSuccess: mission.isSuccess, 
      combatLog: enemy.combatLog
    }

    res.status(200).send(responseMessage);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Finish mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default finishMission;