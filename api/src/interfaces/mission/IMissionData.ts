import { IMissionReward } from "./IMissionReward";

export interface IMissionData {
  name: string;
  description: string;
  reward: IMissionReward;
  durationInSecounds: number;
}