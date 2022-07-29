import GameLayout from 'layouts/GameLayout/GameLayout';
import CharacterInfo from 'pages/game/Character/components/CharacterInfo/CharacterInfo';
import CharacterStats from 'pages/game/Character/components/CharacterStats/CharacterStats';
import classes from './index.module.scss';

const Character = () => {
  return (
    <GameLayout>
      <section className={classes.character}>
        <CharacterInfo />
        <CharacterStats />
      </section>
    </GameLayout>
  )
}

export default Character;