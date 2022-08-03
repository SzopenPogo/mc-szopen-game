import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './CharacterBuyStat.module.scss';

interface Props {
  statValue: number;
  statAmmount: number
  money: number;
  onClick: () => void;
}

const CharacterBuyStat = ({
  statValue,
  statAmmount,
  money,
  onClick
}: Props) => {
  const CHARACTER_STAT_PRICE_MULTIPLIER = useSelector((state: RootState) => state.config.configData.CHARACTER_STAT_PRICE_MULTIPLIER);

  const statPrice = statAmmount > 0
    ? (statValue * CHARACTER_STAT_PRICE_MULTIPLIER) * statAmmount
    : statValue * CHARACTER_STAT_PRICE_MULTIPLIER;

  return (
    <button
      type='button'
      onClick={onClick}
      className={classes['character-buy-stat']}
      disabled={money - statPrice < statPrice}
    >
      Buy {statPrice}$
    </button>
  )
}

export default CharacterBuyStat;