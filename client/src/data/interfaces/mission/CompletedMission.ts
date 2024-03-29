import { MissionCombat } from "data/interfaces/mission/MissionCombat";
import { MissionReward } from "data/interfaces/mission/MissionReward";

export interface CompletedMission {
  reward: MissionReward;
  isCompleted: boolean;
  isSuccess: boolean;
  enemyName: string;
  enemyHealth: number;
  combatLog: Array<MissionCombat>;
}