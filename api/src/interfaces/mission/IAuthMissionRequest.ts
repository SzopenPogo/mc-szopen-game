import { IAuthRequest } from "../account/IAuthRequest";
import { ICharacterModel } from "../character/ICharacterModel";

export interface IAuthMissionRequest extends IAuthRequest {
  character?: ICharacterModel;
}