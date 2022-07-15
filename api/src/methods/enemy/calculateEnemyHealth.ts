import { ENEMY_MAX_HEALTH_PERCENT, ENEMY_MIN_HEALTH_PERCENT } from "../../constants/enemy/enemyPercents";
import getPercent from "../../utils/number/getPercent";
import generateRandomNumberInRange from "../../utils/random/generateRandomNumberInRange";

const calculateEnemyHealth = (characterHealth: number) => {
  const minHealthNoise = getPercent(characterHealth, ENEMY_MIN_HEALTH_PERCENT);
  const maxHealthNoise = getPercent(characterHealth, ENEMY_MAX_HEALTH_PERCENT);

  const healthNoise = generateRandomNumberInRange(minHealthNoise, maxHealthNoise)
  const enemyHealth = characterHealth - healthNoise;
  return enemyHealth.toFixed();
}

export default calculateEnemyHealth;