import { Dispatch } from '@reduxjs/toolkit';
import MainButton from 'components/button/MainButton/MainButton';
import MainForm from 'components/form/MainForm/MainForm';
import TextInput from 'components/input/TextInput/TextInput';
import InvalidMessage from 'components/span/InvalidMessage/InvalidMessage';
import { GAME_ROUTE } from 'data/routes/clientRoutes';
import { FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from 'store';
import { createCharacter } from 'store/character/actions/character-create-actions';
import { isNumberInString } from 'utils/string/isNumberInString';
import { isWhiteSpaceinString } from 'utils/string/isWhiteSpaceinString';
import classes from './CreateCharacterForm.module.scss';

interface Props {
  onNameChange: (name: string) => void;
}

const CreateCharacterForm = ({onNameChange}: Props) => {
  const dispatch = useDispatch() as Dispatch<any>;
  const navigate = useNavigate();

  const characterNameRef = useRef<HTMLInputElement>(null);

  const {CHARACTER_NAME_MIN_LENGHT, 
    CHARACTER_NAME_MAX_LENGHT
  } = useSelector((state: RootState) => state.config.configData);
  const token = useSelector((state: RootState) => state.account.token);

  const [isCharacterNameValid, setIsCharacterNameValid] = useState<boolean>(true);
  const [invalidMessage, setInvalidMessage] = useState<string>('');

  const createCharacterHandler = (event: FormEvent) => {
    event.preventDefault();

    const invalidCharacterNameMessage = 'Invalid character name'
    const nameValue = characterNameRef.current!.value;

    if(!isCharacterNameValid) {
      characterNameRef.current?.focus();
      setInvalidMessage(invalidCharacterNameMessage);
      return;
    }

    if(nameValue.length < CHARACTER_NAME_MIN_LENGHT) {
      setIsCharacterNameValid(false);
      characterNameRef.current?.focus();
      setInvalidMessage(invalidCharacterNameMessage);
      return;
    }

    dispatch(createCharacter(token, nameValue));
    navigate(GAME_ROUTE)
  }

  const validateCharacterName = (value: string) => {
    const isWhiteSpace = isWhiteSpaceinString(value);
    const isNumber = isNumberInString(value);
    
    if(isWhiteSpace || isNumber || value.length < CHARACTER_NAME_MIN_LENGHT) {
      setIsCharacterNameValid(false);
    } 
    
    if(!isWhiteSpace && !isNumber) {
      if(value.length >= CHARACTER_NAME_MIN_LENGHT) {
        setIsCharacterNameValid(true);
        setInvalidMessage('');
      }
      onNameChange(value);
    }
  }

  return (
    <div className={classes['create-character-form']}>
      <MainForm onSubmit={createCharacterHandler}>
        <TextInput
          ref={characterNameRef}
          title={'Character name'}
          minLenght={CHARACTER_NAME_MIN_LENGHT}
          maxLenght={CHARACTER_NAME_MAX_LENGHT}
          onChange={validateCharacterName}
          isValid={isCharacterNameValid}
        />
        {invalidMessage && <InvalidMessage message={invalidMessage} />}
        <MainButton
          title={'Create Character'}
          isSubmit={true}
        />
      </MainForm>
    </div>
  )
}

export default CreateCharacterForm;