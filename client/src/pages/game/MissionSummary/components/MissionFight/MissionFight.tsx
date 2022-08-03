import MainButton from 'components/button/MainButton/MainButton';
import MissionCharacter from 'pages/game/MissionSummary/components/MissionCharacter/MissionCharacter';
import MissionEnemy from 'pages/game/MissionSummary/components/MissionEnemy/MissionEnemy';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './MissionFight.module.scss';

interface Props {
  finishMission: () => void;
}

const MissionFight = ({finishMission}: Props) => {
  
  const { combatLog } = useSelector((state: RootState) => state.mision.completedMission);
  
  const [combatStatus, setCombatStatus] = useState<number>(0);
  const [isAttack, setIsAttack] = useState<boolean>(false);

  const currentEnemyHealth = combatLog[combatStatus].enemyHealth;
  const currentCharacterHealth = combatLog[combatStatus].characterHealth;
  const characterDamage = combatLog[combatStatus].characterDamage;
  const enemyDamage = combatLog[combatStatus].enemyDamage;
  const isFight = combatStatus < combatLog.length - 1

  const finishMissionHandler = useCallback(() => {
    finishMission();
  }, [finishMission])

  //FIGHT
  useEffect(() => {
    if(!isFight) {
      finishMissionHandler();
    }

    const fightTimeout = setTimeout(() => {
      if(isFight) {
        setCombatStatus(prevcombatStatus => prevcombatStatus += 1);
      }
    }, 1500);

    return () => {
      clearTimeout(fightTimeout);
    }
  }, [isFight, combatStatus, finishMissionHandler]);

  //ANIMATION
  useEffect(() => {
    setIsAttack(true);
    const fightAnimationTimeout = setTimeout(() => {
      setIsAttack(false);
    }, 500)
  
    return () => {
      clearTimeout(fightAnimationTimeout);
    }
  }, [combatStatus])

  const skipFightHandler = () => {
    setCombatStatus(combatLog.length - 1);
  }

  const missionFightCharactersClass = isAttack 
    ? `${classes['mission-fight__characters']} ${classes['mission-fight__characters--hit']}`
    : `${classes['mission-fight__characters']}`;

  return (
    <div className={classes['mission-fight']}>
      <div className={missionFightCharactersClass}>
        <MissionCharacter 
          currentHealth={currentCharacterHealth}
          isHitted={isAttack}
          enemyDamage={enemyDamage}
        />
        <MissionEnemy
          currentHealth={currentEnemyHealth}
          isHitted={isAttack}
          characterDamage={characterDamage}
        />
      </div>
      <div className={classes['mission-fight__buttons']}>
        {isFight && <MainButton title={'Skip'} onClick={skipFightHandler} />}
        {!isFight && <MainButton title={'Finish'} onClick={finishMissionHandler} />}
      </div>
    </div>
  )
}

export default MissionFight;