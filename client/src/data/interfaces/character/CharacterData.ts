import { CharacterStat } from "data/interfaces/character/CharacterStat";

export interface CharacterData extends CharacterStat {
  isBusy: boolean;
  name: string;
  lvl: number;
  experience: number;
  // money: number;
  // health: number;
  // baseDamage: number;
  // damage: number;
  // stamina: number;
  // hitPoints: number;
  // criticalStrike: number;
  // armor: number;
}