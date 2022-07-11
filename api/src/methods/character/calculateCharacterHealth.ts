import { BASE_HEALTH } from "../../constants/character/characterDefaultStats";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";


const calculateCharacterHealth = (character: ICharacterModel) => {
  
  const characterStamina = character.stamina;
  const characterLevel = character.lvl;

  const staminaHealthValue = +((BASE_HEALTH / 10) * characterStamina).toFixed();
  const levelHealthValue = +(BASE_HEALTH * characterLevel).toFixed();

  return levelHealthValue + staminaHealthValue;
}

export default calculateCharacterHealth;