import { IEnemyModel } from "../../interfaces/enemy/IEnemyModel";
import generateRandomNumberInRange from "../../utils/random/generateRandomNumberInRange";

const dealEnemyDamage = (enemy: IEnemyModel) => {
  const minDamage = enemy.minDamage;
  const maxDamage = enemy.maxDamage;

  const damage = generateRandomNumberInRange(minDamage, maxDamage);
  return damage;
}

export default dealEnemyDamage;