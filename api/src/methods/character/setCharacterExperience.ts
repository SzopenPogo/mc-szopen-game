import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const setCharacterExperience = async (
  character: ICharacterModel,
  experience: number
) => {
  character.experience = experience;
  await character.save();
}

export default setCharacterExperience;