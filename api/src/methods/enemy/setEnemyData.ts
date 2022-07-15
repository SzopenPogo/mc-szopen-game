import mongoose, { Schema } from "mongoose";
import { ENEMY_NAMES } from "../../constants/enemy/enemyData";
import { IEnemyModel } from "../../interfaces/enemy/IEnemyModel";
import generateRandomNumberInRange from "../../utils/random/generateRandomNumberInRange";

const setEnemyData = (
  enemy: IEnemyModel,
  characterHealth: number,
  characterLvl: number,
  characterDamage: number
) => {
  const {minDamage, maxDamage} = enemy.calculateDamage(characterDamage);
  const nameIndex = generateRandomNumberInRange(0, ENEMY_NAMES.length - 1);
  const enemyName = ENEMY_NAMES[nameIndex];

  enemy.name = enemyName;
  enemy.health = enemy.calculateHealth(characterHealth);
  enemy.level = enemy.calculateLevel(characterLvl);
  enemy.minDamage = minDamage;
  enemy.maxDamage = maxDamage;
}

export default setEnemyData;