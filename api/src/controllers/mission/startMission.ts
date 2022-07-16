import { Response } from "express";
import { IAuthMissionRequest } from "../../interfaces/mission/IAuthMissionRequest";
import Enemy from "../../models/enemyModel";
import Mission from "../../models/missionModel";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";
import getUnixTime from "../../utils/time/getUnixTime";

const startMission = async (req: IAuthMissionRequest, res: Response) => {
  try {
    const activeMissionIndex = req.body.characterActiveMissionIndex;
    const character = req.character!;

    //Check if mission with passed index is in character active missions
    const selectedMission = character.activeMissions[activeMissionIndex];
    if(!selectedMission) {
      const errorMessage = createErrorMessage(404, 'Mission not found');
      return res.status(errorMessage.status).send(errorMessage);
    }

    if(character.isBusy) {
      const errorMessage = createErrorMessage(500, 'Your character is busy now');
      return res.status(errorMessage.status).send(errorMessage);
    }

    const missionInProgress = await Mission.findOne({
      characterId: character._id,
      isCompleted: false
    });

    if(character.isBusy && missionInProgress) {
      return res.status(200).send(missionInProgress)
    }

    const {name, description, durationInSecounds, reward} = selectedMission;
    const missionStartUnixTime = getUnixTime();
    const missionFinishUnixTime = missionStartUnixTime + durationInSecounds;

    const mission = new Mission({
      characterId: character._id,
      isCompleted: false,
      startUnixTime: missionStartUnixTime,
      finishUnixTime: missionStartUnixTime + 5,  //TEST TIME!!!! CHANGE TO missionFinishUnixTime
      name,
      description,
      reward,
      durationInSecounds
    });

    await mission.generateEnemy(character);
    await mission.save();
    await character.setBusy(true);
    await character.setActiveMissions([]);

    res.status(201).send(mission);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Start mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default startMission;