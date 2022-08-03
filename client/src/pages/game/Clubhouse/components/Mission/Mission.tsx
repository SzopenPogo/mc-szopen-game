import { MissionData } from 'data/interfaces/mission/MissionData';
import classes from './Mission.module.scss';
import MainButton from 'components/button/MainButton/MainButton';
import { useNavigate } from 'react-router';
import { GAME_MISSION_ROUTE } from 'data/routes/clientRoutes';
import { useDispatch } from 'react-redux';
import { startMission } from 'store/mission/actions/mission-start-actions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import MoneyReward from 'components/reward/MoneyReward/MoneyReward';
import ExpReward from 'components/reward/ExpReward/ExpReward';
import TimeDetail from 'components/reward/TimeDetail/TimeDetail';

interface Props extends MissionData {
  index: number;
}

const Mission = ({
  name,
  description,
  durationInSecounds,
  reward,
  index
}: Props) => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate();

  const token = useSelector((state: RootState) => state.account.token);
  const characterId = useSelector((state: RootState) => state.character.character._id);

  const {experience, money} = reward;

  const startMissionHandler = () => {
    dispatch(startMission(token, characterId, index));
    navigate(GAME_MISSION_ROUTE);
  }


  return (
    <li className={classes['mission']}>
      <h1 className={classes['mission__title']}>{name}</h1>
      <span className={classes['mission__description']}>{description}</span>
      <div className={classes['mission__details']}>
        <TimeDetail missionDurationInSecounds={durationInSecounds} />
        <MoneyReward money={money} />
        <ExpReward experience={experience} />
      </div>
      <MainButton
        title='Start mission'
        onClick={startMissionHandler}
      />
    </li>
  )
}

export default Mission;