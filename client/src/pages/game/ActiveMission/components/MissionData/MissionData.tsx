import classes from './MissionData.module.scss';

interface Props {
  name: string;
  description: string;
}

const MissionData = ({
  name,
  description
}: Props) => {
  return (
    <div className={classes['mission-data']}>
      <h1 className={classes['mission-data__title']}>{name}</h1>
      <span className={classes['mission-data__description']}>{description}</span>
    </div>
  )
}

export default MissionData;