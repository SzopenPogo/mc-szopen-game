import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { IMissionModel } from "../../interfaces/mission/IMissionModel";
import Enemy from "../../models/enemyModel";

const generateMissionEnemy = async (mission: IMissionModel, character: ICharacterModel) => {
  const enemy = new Enemy({
    missionId: mission._id
  });
  enemy.setData(
    character.health,
    character.lvl,
    character.damage,
  );
  
  await enemy.save();
}

export default generateMissionEnemy;