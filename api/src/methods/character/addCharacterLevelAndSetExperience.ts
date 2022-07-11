import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const addCharacterLevelAndSetExperience = async (
  character: ICharacterModel,
  experience: number
) => {
  character.lvl += 1;
  character.experience = experience

  await character.save();
}

export default addCharacterLevelAndSetExperience;