import CharacterSelect from 'components/modal/CharacterSelectModal/components/CharacterSelect/CharacterSelect';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './CharacterSelectContainer.module.scss';

const CharacterSelectContainer = () => {
  const {characters} = useSelector((state: RootState) => state.character);

  const renderCharacters = characters.map(character => (
    <CharacterSelect
      key={character._id}
      _id={character._id}
      name={character.name}
      lvl={character.lvl}
    />
  ))
  
  return (
    <div className={classes['character-select-container']}>
      <ul className={classes['character-select-list']}>
        {renderCharacters}
      </ul>
    </div>
  )
}

export default CharacterSelectContainer;