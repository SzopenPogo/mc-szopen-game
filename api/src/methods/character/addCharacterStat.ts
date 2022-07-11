import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { ICharacterUpdateStat } from "../../interfaces/character/ICharacterUpdate";
import { createInfoMessage } from "../../utils/messages/createInfoMessage";
import sortAndValidateCharacterStatUpdateOperators from "../../utils/validation/sortAndValidateCharacterStatUpdateOperators";

const addCharacterStat = async (
  character: ICharacterModel,
  updates: Array<ICharacterUpdateStat>
  ) => {
    
  const isInvalidOperator = sortAndValidateCharacterStatUpdateOperators(
    character,
    updates
  );

  if (isInvalidOperator) {
    return isInvalidOperator;
  }

  //Update character stats
  updates.map(update => character[update.statName] += update.amount)

  await character.save();

  const infoMessage = createInfoMessage(200, 'Character stat changed');
  return {
    message: infoMessage,
    character
  }
}

export default addCharacterStat;