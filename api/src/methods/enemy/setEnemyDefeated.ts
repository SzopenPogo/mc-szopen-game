import { IEnemyModel } from "../../interfaces/enemy/IEnemyModel";

const setEnemyDefeated = async (enemy: IEnemyModel) => {
  enemy.isDefeated = true;
  await enemy.save();
}

export default setEnemyDefeated;