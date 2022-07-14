import { IMissionModel } from "../../interfaces/mission/IMissionModel";
import getUnixTime from "../../utils/time/getUnixTime";

const finishMission = async (mission: IMissionModel) => {
  const actualUnixTime = getUnixTime();
  const finishTime = mission.finishUnixTime;

  if(finishTime > actualUnixTime) {
    return;
  }

  mission.isCompleted = true;
  await mission.save();
}

export default finishMission;