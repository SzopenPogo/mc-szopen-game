import { BASE_DAMAGE } from "../../constants/character/characterDefaultStats";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const setCharacterBaseDamage = async (
  character: ICharacterModel,
  value: number
) => {
  const newBaseDamage = BASE_DAMAGE + value;
  character.baseDamage = newBaseDamage;

  await character.save();
}

export default setCharacterBaseDamage;