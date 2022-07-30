import GameLayout from 'layouts/GameLayout/GameLayout';
import MissionGiver from 'pages/game/Clubhouse/components/MissionGiver/MissionGiver';
import classes from './index.module.scss';

const Clubhouse = () => {
  return (
    <GameLayout>
      <section className={classes.clubhouse}>
        <MissionGiver />
      </section>
    </GameLayout>
  )
}

export default Clubhouse;