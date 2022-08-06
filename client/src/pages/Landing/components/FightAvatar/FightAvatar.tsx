import HealthBar from 'components/progress/HealthBar/HealthBar';
import { ReactNode } from 'react';
import classes from './FightAvatar.module.scss';

interface Props {
  children: ReactNode;
  maxHealht: number;
  currentHealth: number;
  isAttack: boolean;
}

const FightAvatar = ({
  children,
  maxHealht,
  currentHealth,
  isAttack
}: Props) => {

  const avatarClass = isAttack
  ? `${classes['fight-avatar']} ${classes['fight-avatar--active']}`
  : `${classes['fight-avatar']}`;
  return (
    <div className={avatarClass}>
      {children}
      <div className={classes['fight-avatar--health']}>
        <HealthBar max={maxHealht} current={currentHealth} />
      </div>
    </div>
  )
}

export default FightAvatar;