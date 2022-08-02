import MissionCharacter from 'pages/game/MissionSummary/components/MissionCharacter/MissionCharacter';
import MissionEnemy from 'pages/game/MissionSummary/components/MissionEnemy/MissionEnemy';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './MissionFight.module.scss';

const MissionFight = () => {
  
  const { combatLog } = useSelector((state: RootState) => state.mision.completedMission);
  
  const [combatStatus, setCombatStatus] = useState<number>(0);
  const [isAttack, setIsAttack] = useState<boolean>(false);

  const currentEnemyHealth = combatLog[combatStatus].enemyHealth;
  const currentCharacterHealth = combatLog[combatStatus].characterHealth;

  useEffect(() => {
    const fightTimeout = setTimeout(() => {
    
      if(combatStatus < combatLog.length - 1) {
        setCombatStatus(prevcombatStatus => prevcombatStatus += 1);
      }
    }, 1500);

    return () => {
      
      clearTimeout(fightTimeout);
    }
  }, [combatStatus, combatLog.length]);

  useEffect(() => {
    setIsAttack(true);
    const fightAnimationTimeout = setTimeout(() => {
      setIsAttack(false);
    }, 500)
  
    return () => {
      clearTimeout(fightAnimationTimeout);
    }
  }, [combatStatus])
  
  

  const missionFightClass = isAttack 
    ? `${classes['mission-fight']} ${classes['mission-fight--hit']}`
    : `${classes['mission-fight']}`;

  return (
    <div className={missionFightClass}>
      <MissionCharacter 
        currentHealth={currentCharacterHealth}
        isHitted={isAttack}
      />
      <MissionEnemy
        currentHealth={currentEnemyHealth}
        isHitted={isAttack}
      />
    </div>
  )
}

export default MissionFight;