import GameLayout from 'layouts/GameLayout/GameLayout';
import MissionFight from 'pages/game/MissionSummary/components/MissionFight/MissionFight';
import classes from './index.module.scss';

const MissionSummary = () => {
  return (
    <GameLayout>
      <section className={classes['mission-summary']}>
        <MissionFight />
      </section>
    </GameLayout>
  )
}

export default MissionSummary;