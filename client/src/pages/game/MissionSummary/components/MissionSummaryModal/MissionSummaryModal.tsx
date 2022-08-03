import MainButton from 'components/button/MainButton/MainButton';
import Modal from 'components/modal/Modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './MissionSummaryModal.module.scss';
import MoneyReward from 'components/reward/MoneyReward/MoneyReward';
import ExpReward from 'components/reward/ExpReward/ExpReward';
import { useNavigate } from 'react-router';
import { GAME_ROUTE } from 'data/routes/clientRoutes';

interface Props {
  isActive: boolean;
}

const MissionSummaryModal = ({isActive}: Props) => {
  const navigate = useNavigate();

  const {isSuccess, reward} = useSelector((state: RootState) => state.mision.completedMission);
  const {experience, money} = reward;

  const continueHandler = () => {
    navigate(GAME_ROUTE);
  }

  const title = isSuccess ? 'Victory' : 'Defeat';
  const titleClass = isSuccess 
    ? `${classes['mission-summary-modal__title']}`
    : `${classes['mission-summary-modal__title']} ${classes['mission-summary-modal__title--defeat']}`;

  return (
    <Modal activate={isActive} timeout={100}>
      <div className={classes['mission-summary-modal']}>
        <h1 className={titleClass}>{title}</h1>
        {isSuccess && <div className={classes['mission-summary-modal__reward']}>
          <h3 
            className={classes['mission-summary-modal__reward--title']}
          >
            Reward:
          </h3>
          <div 
            className={classes['mission-summary-modal__reward--reward']}
          >
            <MoneyReward money={money} />
            <ExpReward experience={experience} />
          </div>
        </div>}
        <MainButton title={'Continue'} onClick={continueHandler}  />
      </div>
    </Modal>
  )
}

export default MissionSummaryModal;