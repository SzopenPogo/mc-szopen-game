import { CHARACTER_STAT_PRICE_MULTIPLIER } from "../../constants/character/characterMultipliers";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";
import { ICharacterUpdateStat } from "../../interfaces/character/ICharacterUpdate";
import sortAndValidateCharacterStatUpdateOperators from "../../utils/validation/sortAndValidateCharacterStatUpdateOperators";

const calculateCharacterStatPrice = (
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

  let totalPrice = 0;

  updates.forEach(update => {
    const updateStatPoints = update.amount;
    let characterUpdatedStatsPoints = character[update.statName];
    
    for (let i = 0; i < updateStatPoints; i++) {
      totalPrice += characterUpdatedStatsPoints * CHARACTER_STAT_PRICE_MULTIPLIER;
      characterUpdatedStatsPoints++;
    }
  });
  
  return totalPrice;
}

export default calculateCharacterStatPrice;