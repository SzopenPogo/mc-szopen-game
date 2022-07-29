import { CharacterFormatedStats } from 'data/interfaces/character/CharacterFormatedStats';
import CharacterStat from 'pages/game/Character/components/CharacterStat/CharacterStat';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './CharacterStats.module.scss';

const CharacterStats = () => {
  const {
    _id,
    money,
    health,
    damage,
    baseDamage,
    stamina,
    hitPoints,
    criticalStrike,
    armor
  } = useSelector((state: RootState) => state.character.character);


  const characterStats = [{
    name: 'Money',
    value: money
  }, {
    name: 'Health',
    value: health
  }, 
  {
    name: 'Damage',
    value: damage
  }, {
    name: 'Base Damage',
    value: baseDamage
  }, {
    name: 'Stamina',
    value: stamina,
    statName: Object.keys({stamina})[0],
    description: 'Increases character health'
  }, {
    name: 'Hit Points',
    value: hitPoints,
    statName: Object.keys({hitPoints})[0],
    description: 'Increases character damage'
  }, {
    name: 'Critical Strike',
    value: criticalStrike,
    statName: Object.keys({criticalStrike})[0],
    description: 'Increase critical strike chance'
  }, {
    name: 'Armor',
    value: armor,
    statName: Object.keys({armor})[0],
    description: 'Decreases received damaged'
  } ] as Array<CharacterFormatedStats>

  const renderStatistics = characterStats.map(statistic => (
    <CharacterStat
      key={statistic.name}
      statistic={statistic}
      money={money}
      _id={_id}
    />
  ))

  return (
    <ul className={classes['character-stats']}>
      {renderStatistics}
    </ul>
  )
}

export default CharacterStats;