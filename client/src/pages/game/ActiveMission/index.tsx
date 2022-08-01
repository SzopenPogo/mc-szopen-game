import GameLayout from 'layouts/GameLayout/GameLayout';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Dispatch } from "@reduxjs/toolkit";
import classes from './index.module.scss';
import { useNavigate } from 'react-router';
import { GAME_ROUTE } from 'data/routes/clientRoutes';
import SpinnerFullscreen from 'components/spinner/SpinnerFullscreen/SpinnerFullscreen';
import { getActiveMission } from 'store/mission/actions/mission-get-active-actions';
import MissionStatusBar from 'pages/game/ActiveMission/components/MissionStatusBar/MissionStatusBar';
import MissionData from 'pages/game/ActiveMission/components/MissionData/MissionData';

const ActiveMission = () => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.account.token);
  const {loading, activeMission} = useSelector((state: RootState) => state.mision);
  const {isBusy, _id: characterId} = useSelector((state: RootState) => state.character.character);
  const {
    _id: missionId,
    name,
    finishUnixTime,
    startUnixTime
  } = activeMission;

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
  

  return (
    <GameLayout>
      {loading && <SpinnerFullscreen />}
      {!loading && <section className={classes['active-mission']}>
        <MissionData name={name} />
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