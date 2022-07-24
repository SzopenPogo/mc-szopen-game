import { MissionData } from "data/interfaces/mission/MissionData";

export interface Character extends CharacterData {
  _id: string;
  accountId: string;
  activeMissions: Array<MissionData>
  
  isBusy: boolean;
  name: string;
  lvl: number;
  experience: number;
  money: number;
  health: number;
  baseDamage: number;
  damage: number;
  stamina: number;
  hitPoints: number;
  criticalStrike: number;
  armor: number;
}