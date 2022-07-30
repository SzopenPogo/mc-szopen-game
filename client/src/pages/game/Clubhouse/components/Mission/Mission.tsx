import { MissionData } from 'data/interfaces/mission/MissionData';
import classes from './Mission.module.scss';
import moneyIcon from 'assets/images/Icon/white/moneyIcon.svg';
import timeIcon from 'assets/images/Icon/white/timeIcon.svg';
import plusIcon from 'assets/images/Icon/white/plusIcon.svg';
import MissionDetail from 'pages/game/Clubhouse/components/MissionDetail/MissionDetail';
import MainButton from 'components/button/MainButton/MainButton';
import { useNavigate } from 'react-router';
import { GAME_MISSION_ROUTE } from 'data/routes/clientRoutes';

interface Props extends MissionData {
  index: number
}

const Mission = ({
  _id,
  name,
  description,
  durationInSecounds,
  reward
}: Props) => {
  const navigate = useNavigate();

  const {experience, money} = reward;
  const missionDurationInMinutes = (durationInSecounds / 60);

  const startMissionHandler = () => {
    
    navigate(GAME_MISSION_ROUTE)
  }

  return (
    <li className={classes['mission']}>
      <h1 className={classes['mission__title']}>{name}</h1>
      <span className={classes['mission__description']}>{description}</span>
      <div className={classes['mission__details']}>
        <MissionDetail 
          text={missionDurationInMinutes.toString()} 
          image={timeIcon} 
          subText='min'
          title='Mission duration'
        />
        <MissionDetail 
          text={money.toString()} 
          image={moneyIcon} 
          subText='$'
          title='Mission money reward'
        />
        <MissionDetail 
          text={experience.toString()} 
          image={plusIcon} 
          subText='exp'
          title='Mission experience reward'
        />
      </div>
      <MainButton
        title='Start mission'
        onClick={startMissionHandler}
      />
    </li>
  )
}

export default Mission;