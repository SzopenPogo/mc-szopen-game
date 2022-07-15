import { ENEMY_MAX_DAMAGE_PERCENT, ENEMY_MIN_DAMAGE_PERCENT } from "../../constants/enemy/enemyPercents";
import getPercent from "../../utils/number/getPercent";

const calculateEnemyDamage = (characterDamage: number) => {
  const minPercentDamage = getPercent(characterDamage, ENEMY_MIN_DAMAGE_PERCENT);
  const maxPercentDamage = getPercent(characterDamage, ENEMY_MAX_DAMAGE_PERCENT);
  
  const minDamage = (characterDamage - minPercentDamage).toFixed();
  const maxDamage = (characterDamage - maxPercentDamage).toFixed();

  return {minDamage, maxDamage}
}

export default calculateEnemyDamage;