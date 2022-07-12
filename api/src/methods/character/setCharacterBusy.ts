import { ICharacterModel } from "../../interfaces/character/ICharacterModel";

const setCharacterBusy = async (
  character: ICharacterModel, 
  status: boolean
) => {
  character.isBusy = status;
  await character.save();
}

export default setCharacterBusy;