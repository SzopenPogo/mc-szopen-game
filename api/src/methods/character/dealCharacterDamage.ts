import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import generateRandomNumberInRange from "../../utils/random/generateRandomNumberInRange";

const dealCharacterDamage = (character: ICharacterModel) => {
  const criticalDamage = character.dealCriticalDamage();
  if(criticalDamage) {
    return criticalDamage;
  }

  const baseDamage = character.baseDamage;
  const damage = character.damage;
  const dealDamage = generateRandomNumberInRange(baseDamage, damage);
  
  return dealDamage;
}

export default dealCharacterDamage;