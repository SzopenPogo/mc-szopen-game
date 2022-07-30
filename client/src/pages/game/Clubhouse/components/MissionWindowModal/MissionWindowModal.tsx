import Modal from 'components/modal/Modal/Modal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { getMissions } from 'store/mission/actions/mission-get-actions';
import classes from './MissionWindowModal.module.scss';
import { Dispatch } from "@reduxjs/toolkit";
import Mission from 'pages/game/Clubhouse/components/Mission/Mission';
import Spinner from 'components/spinner/Spinner/Spinner';

interface Props {
  isActive: boolean;
  closeWindow: () => void;
}

const MissionWindowModal = ({isActive, closeWindow}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;

  const token = useSelector((state: RootState) => state.account.token);
  const characterId = useSelector((state: RootState) => state.character.character._id);
  const {missions, loading} = useSelector((state: RootState) => state.mision);

  useEffect(() => {
    dispatch(getMissions(token, characterId));
  }, [dispatch, token, characterId])

  const renderMissions = missions.map((mission,index) => (
    <Mission
      key={mission._id}
      _id={mission._id}
      name={mission.name}
      description={mission.description}
      durationInSecounds={mission.durationInSecounds}
      reward={mission.reward}
      index={index}
    />
  ))
  
  return (
    <Modal 
      activate={isActive}
      timeout={100}
      closeModal={closeWindow}
    >
      {loading && <Spinner 
        size={'7rem'} 
        borderSize={'.5rem'} 
        color={'white'} 
      />}
      {!loading && <div className={classes['missions']}>
        <h1 className={classes['missions__title']}>Select mission</h1>
        <ul className={classes['missions__missions']}>
          {renderMissions}
        </ul>
      </div>}
    </Modal>
  )
}

export default MissionWindowModal;