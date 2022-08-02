import GameLayout from 'layouts/GameLayout/GameLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Dispatch } from "@reduxjs/toolkit";
import classes from './index.module.scss';
import { useNavigate } from 'react-router';
import { GAME_MISSION_SUMMARY_ROUTE, GAME_ROUTE } from 'data/routes/clientRoutes';
import SpinnerFullscreen from 'components/spinner/SpinnerFullscreen/SpinnerFullscreen';
import { getActiveMission } from 'store/mission/actions/mission-get-active-actions';
import MissionStatusBar from 'pages/game/ActiveMission/components/MissionStatusBar/MissionStatusBar';
import MissionData from 'pages/game/ActiveMission/components/MissionData/MissionData';
import MissionImage from 'pages/game/ActiveMission/components/MissionImage/MissionImage';

const ActiveMission = () => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.account.token);
  const {loading, activeMission} = useSelector((state: RootState) => state.mision);
  const {isBusy, _id: characterId} = useSelector((state: RootState) => state.character.character);
  const {
    _id: missionId,
    name,
    description,
    finishUnixTime,
    startUnixTime
  } = activeMission;
  const {isCompleted} = useSelector((state: RootState) => state.mision.completedMission);

  useEffect(() => {
    if(!loading) {
      if(!isBusy && !missionId) {
        navigate(GAME_ROUTE);
        return;
      }

      if(!missionId && characterId && token) {
        dispatch(getActiveMission(token, characterId));
      }    
    }
  }, [dispatch, navigate, isBusy, missionId, characterId, token, loading])

  useEffect(() =>  {
    if(isCompleted) {
      navigate(GAME_MISSION_SUMMARY_ROUTE)
    }
  }, [navigate, isCompleted])
  

  return (
    <GameLayout>
      {loading && <SpinnerFullscreen />}
      {!loading && <section className={classes['active-mission']}>
        <MissionData
          name={name}
          description={description}
        />
        <MissionImage />
        <MissionStatusBar 
          missionId={missionId}
          finishUnixTime={finishUnixTime}
          startUnixTime={startUnixTime}
          characterId={characterId}
        />
      </section>}
    </GameLayout>
  )
}

export default ActiveMission;