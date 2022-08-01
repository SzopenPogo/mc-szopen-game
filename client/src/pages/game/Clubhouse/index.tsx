import { GAME_MISSION_ROUTE } from 'data/routes/clientRoutes';
import GameLayout from 'layouts/GameLayout/GameLayout';
import MissionGiver from 'pages/game/Clubhouse/components/MissionGiver/MissionGiver';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'store';
import classes from './index.module.scss';

const Clubhouse = () => {
  const navigate = useNavigate();

  const isBusy = useSelector((state: RootState) => state.character.character.isBusy);

  useEffect(() => {
    if(isBusy) {
      navigate(GAME_MISSION_ROUTE)
    }
  }, [navigate, isBusy])
  

  return (
    <GameLayout>
      <section className={classes.clubhouse}>
        <MissionGiver />
      </section>
    </GameLayout>
  )
}

export default Clubhouse;