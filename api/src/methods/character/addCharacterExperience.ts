import { CHARACTER_EXPERIENCE_LVL_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const addCharacterExperience = async (
  character: ICharacterModel,
  experience: number
) => {
  const characterLevel = character.lvl;
  const characterExperienceWithExperience = +character.experience + +experience;

  const experienceToLevelUp = characterLevel * CHARACTER_EXPERIENCE_LVL_MULTIPLIER
  const isNextLevel = characterExperienceWithExperience >= experienceToLevelUp;

  const experienceOnNextLevel = (characterLevel + 1) * CHARACTER_EXPERIENCE_LVL_MULTIPLIER;
  
  if(isNextLevel && characterExperienceWithExperience > experienceOnNextLevel) {
    const remainingExperience = characterExperienceWithExperience - experienceOnNextLevel;
    await character.addLevelAndSetExperience(remainingExperience);
    //Recursion addExperience()
    return await character.addExperience(remainingExperience);
  }

  if(isNextLevel) {
    const remainingExperience = characterExperienceWithExperience - experienceToLevelUp;
    return await character.addLevelAndSetExperience(remainingExperience);
  }
  
  await character.setExperience(characterExperienceWithExperience);

  //Everything is saved in addLevelAndSetExperience and  setExperience functions;
}

export default addCharacterExperience;