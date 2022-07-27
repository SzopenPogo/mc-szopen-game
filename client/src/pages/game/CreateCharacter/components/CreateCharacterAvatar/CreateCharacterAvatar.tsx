import CharacterAvatar from 'components/character/CharacterAvatar/CharacterAvatar';
import { capitalizedFirstLetter } from 'utils/string/capitalizedFirstLetter';
import classes from './CreateCharacterAvatar.module.scss';

interface Props {
  name: string;
}

const CreateCharacterAvatar = ({name}: Props) => {
  return (
    <div className={classes['create-character-avatar']}>
      <div className={classes['create-character-avatar__avatar']}>
      <CharacterAvatar />
      </div>
      {name.length > 0 && <h3 className={classes['create-character__title']}>
        {capitalizedFirstLetter(name)}
      </h3>}
    </div>
  )
}

export default CreateCharacterAvatar;