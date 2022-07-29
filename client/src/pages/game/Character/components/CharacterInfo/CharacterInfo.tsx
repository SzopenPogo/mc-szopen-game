import CharacterAvatar from 'components/character/CharacterAvatar/CharacterAvatar';
import CharacterExpBar from 'components/character/CharacterExpBar/CharacterExpBar';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './CharacterInfo.module.scss';

const CharacterInfo = () => {
  const {name, lvl, isBusy} = useSelector((state: RootState) => state.character.character);

  return (
    <div className={classes['character-info']}>
      <div className={classes['character-info__avatar']}>
        <CharacterAvatar />
        <div className={classes['character-info__avatar-data']}>
          <h1>{name}</h1>
          {isBusy && <span>{'< busy >'}</span>}
          <h3>{lvl}</h3>
        </div>
      </div>
      <div className={classes['character-info__exp']}>
        <CharacterExpBar />
      </div>
    </div>
  )
}

export default CharacterInfo;