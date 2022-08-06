import ProgressBar from 'components/progress/ProgressBar/ProgressBar';
import { useEffect, useState } from 'react';
import classes from './CharacterSlideAvatar.module.scss';

const CharacterSlideAvatar = () => {
  const MAX_EXP_MULTIPLIER = 50;

  const [experience, setExperience] = useState<number>(0);
  const [level, setLevel] = useState<number>(1);
  const [maxExperience, setMaxExperience] = useState<number>(level * MAX_EXP_MULTIPLIER);

  useEffect(() => {
    const expTimeout = setTimeout(() => {
      const addExperience = 10 * level;

      if(experience < maxExperience) {
        setExperience(prevExp => prevExp += addExperience);
        return;
      }

      if(experience + addExperience > maxExperience) {
        setLevel(prevLvl => prevLvl += 1);
        const experienceOnNextLevel = experience + addExperience - maxExperience;
        setMaxExperience(level * MAX_EXP_MULTIPLIER)
        setExperience(experienceOnNextLevel);
        return;
      }
      
    }, 1500);
  
    return () => {
      clearTimeout(expTimeout);
    }
  }, [experience, maxExperience, level])
  
  
  return (
    <div className={classes['character-avatar']}>
      <div className={classes['character-avatar__avatar']}>
        <span 
          className={classes['character-avatar__avatar--name']}
        >
          Biker {level}lvl
        </span>
      </div>
      <div className={classes['character-avatar__progress']}>
        <ProgressBar max={maxExperience} current={experience} />
      </div>
    </div>
  )
}

export default CharacterSlideAvatar;