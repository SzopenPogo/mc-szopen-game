import EnemyAvatar from 'components/enemy/EnemyAvatar/EnemyAvatar';
import MissionAvatar from 'pages/game/MissionSummary/components/MissionAvatar/MissionAvatar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

interface Props {
  currentHealth: number;
  isHitted: boolean;
}

const MissionEnemy = ({currentHealth,isHitted}: Props) => {
  const { enemyHealth, enemyName } = useSelector((state: RootState) => state.mision.completedMission);

  
  return (
    <MissionAvatar 
      max={enemyHealth}
      current={currentHealth}
      name={enemyName}
      isHitted={isHitted}
    >
      <EnemyAvatar />
    </MissionAvatar>
  )
}

export default MissionEnemy;