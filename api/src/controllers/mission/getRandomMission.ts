import { Response } from "express";
import { MAX_CHARACTER_ACTIVE_MISSIONS } from "../../constants/character/characterMissions";
import { CHARACTER_EXPERIENCE_MISSION_MULTIPLIER, CHARACTER_MONEY_MISSION_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { MISSION_LIST } from "../../constants/mission/missionList";
import { IAuthMissionRequest } from "../../interfaces/mission/IAuthMissionRequest";
import { createErrorMessage } from "../../utils/messages/createErrorMessage";
import generateRandomNumbers from "../../utils/random/generateRandomNumbers";

const getRandomMission = async (req: IAuthMissionRequest, res: Response) => {
  try {
    const character = req.character!;
    
    const characterActiveMissions = character.activeMissions;
    //If character already have active missions return it
    if(characterActiveMissions.length >= MAX_CHARACTER_ACTIVE_MISSIONS) {
      return res.status(200).send(characterActiveMissions);
    }

    if(character.isBusy) {
      const errorMessage = createErrorMessage(403, 'Your character is busy now');
      return res.status(errorMessage.status).send(errorMessage);
    }

    //If character don't have active missions then generate 
    const missionIndexes = generateRandomNumbers(MAX_CHARACTER_ACTIVE_MISSIONS, MISSION_LIST.length) as Array<number>;
    const missions = missionIndexes.map(missionIndex => {
      const mission = MISSION_LIST[missionIndex];

      const missionExperienceBonus = character.lvl * CHARACTER_EXPERIENCE_MISSION_MULTIPLIER;
      const missionExperience = +(mission.reward.experience + missionExperienceBonus).toFixed();
      mission.reward.experience = missionExperience;

      const missionMoneyBonus = character.lvl * CHARACTER_MONEY_MISSION_MULTIPLIER;
      const missionMoney = +(mission.reward.money + missionMoneyBonus).toFixed();
      mission.reward.money = missionMoney;
      
      return mission;
    });
    await character.setActiveMissions(missions);

    res.status(200).send(character.activeMissions);
  } catch (error) {
    const errorMessage = createErrorMessage(500, 'Get mission failed', error);
    res.status(errorMessage.status).send(errorMessage);
  }
}

export default getRandomMission;