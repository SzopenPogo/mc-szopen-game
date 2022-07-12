import { CHARACTER_HIT_POINTS_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const calculateCharacterDamage = (character: ICharacterModel) => {
  const baseDamage = character.baseDamage;
  const hitPoints = character.hitPoints;
  const multipliedHitPoints = hitPoints * CHARACTER_HIT_POINTS_MULTIPLIER

  return baseDamage + multipliedHitPoints;
}

export default calculateCharacterDamage;