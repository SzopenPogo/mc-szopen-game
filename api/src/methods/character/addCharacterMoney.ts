import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const addCharacterMoney = async (
  character: ICharacterModel,
  money: number
) => {
  character.money += money;
  await character.save();
}

export default addCharacterMoney;