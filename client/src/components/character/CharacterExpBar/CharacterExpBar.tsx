import ProgressBar from 'components/progress/ProgressBar/ProgressBar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

const CharacterExpBar = () => {
  const {experience, lvl} = useSelector((state: RootState) => state.character.character);
  const experienceMultiplier = useSelector((state: RootState) => state.config.configData.CHARACTER_EXPERIENCE_LVL_MULTIPLIER);
  
  const experienceToLevelUp = lvl * experienceMultiplier;
  return (
    <ProgressBar max={experienceToLevelUp} current={experience} />
  )
}

export default CharacterExpBar;