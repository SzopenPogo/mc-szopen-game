import CharacterPreview from 'components/character/CharacterPreview/CharacterPreview';
import GameLayout from 'layouts/GameLayout/GameLayout';
import classes from './index.module.scss';

const Game = () => {
  return (
    <GameLayout>
      <CharacterPreview />
    </GameLayout>
  )
}

export default Game;