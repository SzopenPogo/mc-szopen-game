import { MAX_CRITICAL_STRIKE_CHANCE } from "../../constants/character/characterDefaultStats";
import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const calculateCharacterCriticalStrikeChance = (character: ICharacterModel) => {
  const criticalStrike = character.criticalStrike;
  const level = character.lvl;

  //Calculate character critical strike
  const criticalStrikeResoult = criticalStrike / level;

  //If character critical strike is greater than max critical strike then set max critical strike
  //To avoid 100% (or more) critical strike chance (if max critical strike is below 100% ofc)
  const criticalStrikeChance = criticalStrikeResoult <= MAX_CRITICAL_STRIKE_CHANCE 
    ? criticalStrikeResoult 
    : MAX_CRITICAL_STRIKE_CHANCE;

  return criticalStrikeChance >= Math.floor(Math.random() * 100)
}

export default calculateCharacterCriticalStrikeChance;