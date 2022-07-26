import classes from './ProgressBar.module.scss';

interface Props {
  max: number;
  current: number;
}

const ProgressBar = ({max, current}: Props) => {
  const progressWidth = (current/max*100).toFixed();

  return (
    <div className={classes['progress-bar']}>
      <span
        className={classes['progress-bar__info']}
      >
        {current} / {max}
      </span>
      <span
        style={{width: `${progressWidth}%`}}
        className={classes['progress-bar__progress']}
      />
    </div>
  )
}

export default ProgressBar;