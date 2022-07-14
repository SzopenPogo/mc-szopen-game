import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const takeCharacterDamage = (character: ICharacterModel, damage: number) => {
  const health = character.health;
  const armor = character.armor;

  const damageTaken = damage - armor;

  return health - damageTaken;
}

export default takeCharacterDamage;