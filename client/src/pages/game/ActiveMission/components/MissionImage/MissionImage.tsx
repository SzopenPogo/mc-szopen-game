import classes from './MissionImage.module.scss';
import missionBiker from 'assets/images/layout/missionBiker.webp';

const MissionImage = () => {
  return (
    <div className={classes['mission-image']}>
      <img src={missionBiker} alt='biker-img' className={classes['mission-biker']} />
    </div>
  )
}

export default MissionImage;