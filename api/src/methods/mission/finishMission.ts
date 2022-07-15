import { IMissionModel } from "../../interfaces/mission/IMissionModel";
import getUnixTime from "../../utils/time/getUnixTime";

const finishMission = async (mission: IMissionModel, isSuccess: boolean) => {
  const actualUnixTime = getUnixTime();
  const finishTime = mission.finishUnixTime;

  if(finishTime > actualUnixTime) {
    return;
  }

  mission.isCompleted = true;
  mission.isSuccess = isSuccess;

  await mission.save();
}

export default finishMission;