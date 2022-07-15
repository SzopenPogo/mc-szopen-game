import { ENEMY_LEVEL_NOISE } from "../../constants/enemy/enemyValues";
import generateRandomNumberInRange from "../../utils/random/generateRandomNumberInRange";

const calculateEnemyLevel = (characterLvl: number) => {
  let levelNoise = characterLvl > ENEMY_LEVEL_NOISE
    ? generateRandomNumberInRange(-ENEMY_LEVEL_NOISE, ENEMY_LEVEL_NOISE)
    : 0;
  
  const enemyLevel = characterLvl + levelNoise
  return enemyLevel;
}

export default calculateEnemyLevel;