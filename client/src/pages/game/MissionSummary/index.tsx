import { GAME_ROUTE } from 'data/routes/clientRoutes';
import GameLayout from 'layouts/GameLayout/GameLayout';
import MissionFight from 'pages/game/MissionSummary/components/MissionFight/MissionFight';
import MissionSummaryModal from 'pages/game/MissionSummary/components/MissionSummaryModal/MissionSummaryModal';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'store';
import classes from './index.module.scss';

const MissionSummary = () => {
  const navitage = useNavigate();

  const [isFight, setIsFight] = useState<boolean>(true);

  const isMissionCompleted = useSelector((state: RootState) => state.mision.completedMission.isCompleted);

  const finishMissionHandler = () => {
    setIsFight(false);
  }

  useEffect(() => {
    if(!isMissionCompleted) {
      navitage(GAME_ROUTE);
    }
  }, [navitage, isMissionCompleted])

  return (
    <GameLayout>
      <section className={classes['mission-summary']}>
        <MissionFight finishMission={finishMissionHandler} />
      </section>
      <MissionSummaryModal isActive={!isFight} />
    </GameLayout>
  )
}

export default MissionSummary;