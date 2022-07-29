import { Dispatch } from '@reduxjs/toolkit';
import { CharacterFormatedStats } from 'data/interfaces/character/CharacterFormatedStats';
import CharacterBuyStat from 'pages/game/Character/components/CharacterBuyStat/CharacterBuyStat';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { characterBuyStat } from 'store/character/actions/character-buy-stat-actions';
import classes from './CharacterStat.module.scss';

interface Props {
  _id: string;
  statistic: CharacterFormatedStats;
  money: number;
}

const CharacterStat = ({
  _id,
  statistic,
  money
}: Props) => {
  type NewType = Dispatch<any>;

  const dispatch = useDispatch() as NewType;

  const token = useSelector((state: RootState) => state.account.token);

  const buyStatHandler = () => {
    if(statistic.statName) {
      dispatch(characterBuyStat(token, _id, statistic.statName, 1));
    }
  }

  return (
    <li className={classes['character-stat']}>
      <div className={classes['character-stat__info']}>
        <span className={classes['character-stat__info--name']}>{statistic.name}</span>
        <span className={classes['character-stat__info--value']}>{statistic.value}</span>
      </div>
      {statistic.statName && <CharacterBuyStat 
        _id={_id}
        statName={statistic.statName} 
        statValue={statistic.value} 
        money={money} 
        onClick={buyStatHandler}
      />}
    </li>
  )
}

export default CharacterStat;