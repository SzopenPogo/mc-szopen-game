import { CHARACTER_EXPERIENCE_LVL_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const addCharacterExperience = async (
  character: ICharacterModel,
  experience: number
) => {
  const characterExperience = character.experience;
  const characterLevel = character.lvl;

  const experienceToLevelUp = characterLevel * CHARACTER_EXPERIENCE_LVL_MULTIPLIER
  const isNextLevel = characterExperience + experience >= experienceToLevelUp;

  const experienceOnNextLevel = (characterLevel + 1) * CHARACTER_EXPERIENCE_LVL_MULTIPLIER

  if(isNextLevel && experience > experienceOnNextLevel) {
    const remainingExperience = experience - experienceOnNextLevel;

    await character.addLevelAndSetExperience(remainingExperience);
    //Recursion addExperience()
    return await character.addExperience(remainingExperience);
  }

  if(isNextLevel) {
    const remainingExperience = experience - experienceToLevelUp;
    return await character.addLevelAndSetExperience(remainingExperience);
  }
  
  await character.setExperience(experience);

  //Everything is saved in addLevelAndSetExperience and  setExperience functions;
}

export default addCharacterExperience;