import classes from './MissionData.module.scss';

interface Props {
  name: string
}

const MissionData = ({
  name
}: Props) => {
  return (
    <div className={classes['mission-data']}>
      <h1>{name}</h1>
    </div>
  )
}

export default MissionData;