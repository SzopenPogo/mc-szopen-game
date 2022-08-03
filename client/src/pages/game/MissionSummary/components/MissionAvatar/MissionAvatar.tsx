import HealthBar from 'components/progress/HealthBar/HealthBar';
import { ReactNode } from 'react';
import classes from './MissionAvatar.module.scss';

interface Props {
  children: ReactNode;
  max: number;
  current: number;
  name: string;
  isHitted: boolean;
  receivedDamage: number;
}

const MissionAvatar = ({
  children, 
  max, 
  current,
  name,
  isHitted,
  receivedDamage
}: Props) => {
  const missionAvatarClass = isHitted
    ? `${classes['mission-avatar']} ${classes['mission-avatar--hit']}`
    : `${classes['mission-avatar']}`;
    
  return (
    <div className={missionAvatarClass}>
      {children}
      <div className={classes['mission-avatar__data']}>
        <h1 className={classes['mission-avatar__data--name']}>{name}</h1>
        <div className={classes['mission-avatar__data--health-bar']}>
          <HealthBar max={max} current={current} />
        </div>
      </div>
      {isHitted && <span className={classes['mission-avatar__damage']}>- {receivedDamage}</span>}
    </div>
  )
}

export default MissionAvatar;