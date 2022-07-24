import { MissionData } from "data/interfaces/mission/MissionData";

export interface Mission extends MissionData {
  characterId: string;
  isCompleted: boolean;
  isSuccess: boolean;
  startUnixTime: number;
  finishUnixTime: number;
}