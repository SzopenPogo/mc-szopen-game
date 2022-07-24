import { Dispatch } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { selectCharacter } from 'store/character/actions/character-select-actions';
import classes from './CharacterSelect.module.scss';

interface Props {
  _id: string;
  name: string,
  lvl: number
}

const CharacterSelect = ({name, lvl, _id}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;

  const selectCharacterHandler = () => {
    dispatch(selectCharacter(_id));
  }

  return (
    <li className={classes['character-select']} onClick={selectCharacterHandler}>
      <div className={classes['character-select__avatar']} />
      <div className={classes['character-select__data']}>
        <h1 className={classes['character-select__data-name']}>{name}</h1>
        <h3 className={classes['character-select__data-lvl']}>Level {lvl}</h3>
      </div>
    </li>
  )
}

export default CharacterSelect;