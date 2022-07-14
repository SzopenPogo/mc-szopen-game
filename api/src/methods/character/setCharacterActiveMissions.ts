import { MAX_CHARACTER_ACTIVE_MISSIONS } from "../../constants/character/characterMissions";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { IMissionData } from "../../interfaces/mission/IMissionData";

const setCharacterActiveMissions = async (
  character: ICharacterModel, 
  missions: Array<IMissionData>
) => {

  if(missions.length <= 0) {
    character.activeMissions = [];
    return await character.save()
  }

  if(character.activeMissions.length >= MAX_CHARACTER_ACTIVE_MISSIONS) {
    return;
  }

  character.activeMissions = missions;
  await character.save();
}

export default setCharacterActiveMissions;