import MissionWindowModal from 'pages/game/Clubhouse/components/MissionWindowModal/MissionWindowModal';
import { useState } from 'react';
import classes from './MissionGiver.module.scss';

const MissionGiver = () => {
  const [isMissionWindow, setIsMissionWindow] = useState<boolean>(false);

  const toggleMissionWindow = () => {
    setIsMissionWindow(!isMissionWindow);
  }

  return (
    <>
      <button 
        className={classes['mission-giver']}
        type='button'
        onClick={toggleMissionWindow}
      />
      <MissionWindowModal
        isActive={isMissionWindow}
        closeWindow={toggleMissionWindow}
      />
    </>
  )
}

export default MissionGiver;