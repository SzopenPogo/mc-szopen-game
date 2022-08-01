import MainButton from 'components/button/MainButton/MainButton';
import ProgressBar from 'components/progress/ProgressBar/ProgressBar';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './MissionStatusBar.module.scss';
import { Dispatch } from "@reduxjs/toolkit";
import { finishMission } from 'store/mission/actions/mission-finish-actions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { useNavigate } from 'react-router';
import { GAME_MISSION_SUMMARY_ROUTE } from 'data/routes/clientRoutes';
import getUnixTime from 'utils/time/getUnixTime';

interface Props {
  finishUnixTime: number;
  startUnixTime: number;
  missionId: string;
  characterId: string;
}

const MissionStatusBar = ({
  finishUnixTime,
  missionId,
  characterId,
  startUnixTime
}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.account.token);

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isMissionComplete, setIsMissionComplete] = useState<boolean>(false);

  const missionTime = finishUnixTime - startUnixTime;

  const finishMissionHandler = useCallback(() => {
    dispatch(finishMission(token, characterId, missionId));
    navigate(GAME_MISSION_SUMMARY_ROUTE);
  }, [dispatch, navigate, token, characterId, missionId]);

  useEffect(() => {
    if(isMissionComplete) {
      finishMissionHandler();
      return;
    }

    const timeLeftInterval = setInterval(() => {
      const currentUnixTime = getUnixTime();
      const time = currentUnixTime - startUnixTime;
      setTimeLeft(time);
    }, 1000);

    return () => {
      setIsMissionComplete(timeLeft >= missionTime)
      clearInterval(timeLeftInterval);
    }
  }, [
    isMissionComplete, 
    finishUnixTime, 
    finishMissionHandler, 
    missionTime, 
    timeLeft, 
    startUnixTime
  ])

  return (
    <div className={classes['mission-time-bar']}>
      {!isMissionComplete && <ProgressBar max={missionTime} current={timeLeft} />}
      {isMissionComplete && <MainButton 
        title={'Finish Mission'}
        onClick={finishMissionHandler}
      />}
    </div>
  )
}

export default MissionStatusBar;