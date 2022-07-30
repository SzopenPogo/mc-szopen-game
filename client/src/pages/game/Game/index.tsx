import CharacterPreview from 'components/character/CharacterPreview/CharacterPreview';
import GameLayout from 'layouts/GameLayout/GameLayout';
import ClubhouseLink from 'pages/game/Game/components/ClubhouseLink/ClubhouseLink';
import classes from './index.module.scss';

const Game = () => {
  return (
    <GameLayout>
      <section className={classes['game-activities']}>
        <ClubhouseLink />
      </section>
      <CharacterPreview />
    </GameLayout>
  )
}

export default Game;