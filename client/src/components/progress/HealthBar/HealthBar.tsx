import classes from './HealthBar.module.scss';

interface Props {
  max: number;
  current: number;
}

const HealthBar = ({max, current}: Props) => {
  const healthPercent = +(current/max*100).toFixed();
  const healthBarWidth = healthPercent >= 0 ? healthPercent : 0;

  return (
    <div className={classes['health-bar']}>
      <span
        className={classes['health-bar__info']}
      >
        {`${current} / ${max}  (${healthPercent}%)`}
      </span>
      <span
        style={{width: `${healthBarWidth}%`}}
        className={classes['health-bar__health']}
      />
    </div>
  )
}

export default HealthBar;