import GameLayout from 'layouts/GameLayout/GameLayout';
import CreateCharacterAvatar from 'pages/game/CreateCharacter/components/CreateCharacterAvatar/CreateCharacterAvatar';
import CreateCharacterForm from 'pages/game/CreateCharacter/components/CreateCharacterForm/CreateCharacterForm';
import CreateCharacterTitle from 'pages/game/CreateCharacter/components/CreateCharacterTitle/CreateCharacterTitle';
import { useState } from 'react';
import classes from './index.module.scss';

const CreateCharacter = () => {
  const [characterName, setCharacterName] = useState<string>('');
  
  const characterNameHandler = (name: string) => {
    setCharacterName(name);
  }

  return (
    <GameLayout>
      <section className={classes['create-character']}>
        <div className={classes['create-character__items']}>
          <CreateCharacterTitle />
          <CreateCharacterAvatar name={characterName} />
          <CreateCharacterForm onNameChange={characterNameHandler} />
        </div>
      </section>
    </GameLayout>
  )
}

export default CreateCharacter;