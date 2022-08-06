import MainButton from 'components/button/MainButton/MainButton';
import CharacterAvatar from 'components/character/CharacterAvatar/CharacterAvatar';
import EnemyAvatar from 'components/enemy/EnemyAvatar/EnemyAvatar';
import FightAvatar from 'pages/Landing/components/FightAvatar/FightAvatar';
import PresentationSlide from 'pages/Landing/components/PresentationSlide/PresentationSlide';
import { useEffect, useState } from 'react';
import classes from './FightSlide.module.scss';

interface Props {
  title: string;
  isActive: boolean;
}

const FightSlide = ({title, isActive}: Props) => {
  const CHARACTER_MAX_HEALTH = 1000;
  const ENEMY_MAX_HEALTH = 800;

  const [isAttack, setIsAttack] = useState<boolean>(false);
  const [characterHealth, setCharacterHealth] = useState<number>(CHARACTER_MAX_HEALTH);
  const [enemyHealth, setEnemyHealth] = useState<number>(ENEMY_MAX_HEALTH);

  useEffect(() => {
    if(characterHealth <= 0 || enemyHealth <= 0) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      setCharacterHealth(CHARACTER_MAX_HEALTH);
      setEnemyHealth(ENEMY_MAX_HEALTH);
    }
  }, [characterHealth, enemyHealth])
  

  const attack = () => {
    if(isAttack || characterHealth <= 0 || enemyHealth <= 0) {
      return;
    }

    setIsAttack(true);
    
    const attackTimeout = setTimeout(() => {
      setIsAttack(false);

      setCharacterHealth(prevCharacterHealth => prevCharacterHealth -= 150);
      setEnemyHealth(prevEnemyHealth => prevEnemyHealth -= 200)
      clearTimeout(attackTimeout);
    }, 400);

    
  }

  const fightSlideAvatarsClass = isAttack
    ? `${classes['fight-slide__avatars']} ${classes['fight-slide__avatars--active']}`
    : `${classes['fight-slide__avatars']}`;

  return (
    <PresentationSlide title={title} isActive={isActive}>
      <div className={classes['fight-slide']}>
        <div className={fightSlideAvatarsClass}>
          <FightAvatar
            maxHealht={CHARACTER_MAX_HEALTH}
            currentHealth={characterHealth}
            isAttack={isAttack}
          >
            <CharacterAvatar />
          </FightAvatar>
          <FightAvatar
            maxHealht={ENEMY_MAX_HEALTH}
            currentHealth={enemyHealth}
            isAttack={isAttack}
          >
            <EnemyAvatar />
          </FightAvatar>
        </div>
        <div className={classes['fight-slide__button']}>
          <MainButton title={'ATTACK'} onClick={attack} />
        </div>
      </div>
      
    </PresentationSlide>
  )
}

export default FightSlide;