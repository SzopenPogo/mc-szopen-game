import CharacterAvatar from 'components/character/CharacterAvatar/CharacterAvatar';
import CharacterExpBar from 'components/character/CharacterExpBar/CharacterExpBar';
import CharacterPreviewContainer from 'components/character/CharacterPreview/components/CharacterPreviewContainer/CharacterPreviewContainer';
import CharacterPreviewInfo from 'components/character/CharacterPreview/components/CharacterPreviewInfo/CharacterPreviewInfo';
import { GAME_CHARACTER_ROUTE } from 'data/routes/clientRoutes';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store';
import classes from './CharacterPreview.module.scss';

const CharacterPreview = () => {
  const {name, 
      isBusy, 
      lvl,
      money
    } = useSelector((state: RootState) => state.character.character);

  return (
    <div className={classes['character-preview']}>
      <Link
        to={GAME_CHARACTER_ROUTE}
        className={classes['character-preview__avatar']}
        title='Go to the character panel'
      >
        <CharacterAvatar />
      </Link>
      <CharacterPreviewContainer>
        <CharacterPreviewInfo
          title='lvl'
          data={lvl.toString()}
        />
        <CharacterPreviewInfo
          title='$'
          data={money.toString()}
        />
      </CharacterPreviewContainer>
      <CharacterPreviewContainer>
        <CharacterPreviewInfo
          data={name}
        />
        <CharacterPreviewInfo
          data={isBusy ? '< Busy >' : ''}
        />
      </CharacterPreviewContainer>
      <div className={classes['character-preview__exp']}>
        <CharacterExpBar />
      </div>
    </div>
  )
}

export default CharacterPreview;