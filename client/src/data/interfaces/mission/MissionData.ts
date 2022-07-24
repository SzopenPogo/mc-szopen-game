import { MissionReward } from "data/interfaces/mission/MissionReward";

export interface MissionData {
  _id: string;
  name: string;
  description: string;
  reward: MissionReward;
  durationInSecounds: number;
}