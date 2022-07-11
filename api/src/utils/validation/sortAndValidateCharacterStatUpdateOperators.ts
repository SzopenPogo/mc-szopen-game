import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { ICharacterUpdateStat } from "../../interfaces/character/ICharacterUpdate";
import { validateUpdateOperator } from "./validateUpdateOperator";

const sortAndValidateCharacterStatUpdateOperators = (
  character: ICharacterModel,
  updates: Array<ICharacterUpdateStat>
) => {
  const updatesStatNames = [] as Array<string>;
  const allowedUpdates = ['stamina', 'hitPoints', 'criticalStrike', 'armor'];

  //Push updates names from updates array objects (passed in prop) 
  //to updatesStatNames array
  updates.map(update => updatesStatNames.push(update.statName));

  const isValidOperator = validateUpdateOperator(allowedUpdates, updatesStatNames)
  if (!isValidOperator.isValid) {
    return {
      message: isValidOperator.message,
      character};
  }
}

export default sortAndValidateCharacterStatUpdateOperators;