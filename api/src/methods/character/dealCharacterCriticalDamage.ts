import { CHARACTER_CRITICAL_STRIKE_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const dealCharacterCriticalDamage = (character: ICharacterModel) => {
  const isCriticalStrike = character.calculateCriticalStrikeChance();

  if(!isCriticalStrike) {
    return;
  }

  const damage = character.damage;
  const criticalStrke = character.criticalStrike;

  const multipliedCriticalStrike = criticalStrke * CHARACTER_CRITICAL_STRIKE_MULTIPLIER;
  const criticalStrikeDamage = damage + multipliedCriticalStrike;

  return criticalStrikeDamage;
}

export default dealCharacterCriticalDamage;