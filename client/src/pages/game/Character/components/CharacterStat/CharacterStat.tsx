import { Dispatch } from '@reduxjs/toolkit';
import CursorStickyContainer from 'components/containers/CursorStickyContainer/CursorStickyContainer';
import { CharacterFormatedStats } from 'data/interfaces/character/CharacterFormatedStats';
import CharacterBuyStat from 'pages/game/Character/components/CharacterBuyStat/CharacterBuyStat';
import { useEffect, useState } from 'react';
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
  const dispatch = useDispatch() as Dispatch<any>;

  const token = useSelector((state: RootState) => state.account.token);

  const [isDescription, setIsDescription] = useState<boolean>(false);
  const [statAmount, setStatAmount] = useState<number>(0);

  useEffect(() => {
    const dispatchTimeout = setTimeout(() => {
      if(statAmount > 0 && statistic.statName) {
        dispatch(characterBuyStat(token, _id, statistic.statName, statAmount));
        setStatAmount(0);
      }
    }, 1000);

    return () => {
      clearTimeout(dispatchTimeout);
    }
    
  }, [dispatch, statAmount, statistic.statName, token, _id]);

  const enableDescription = () => {
    if(statistic.description) {
      setIsDescription(true);
    }
  }

  const disableDescription = () => {
    setIsDescription(false);
  }

  const buyStatHandler = () => {
    setStatAmount(prevStatAmount => prevStatAmount += 1);
  }

  const statValueText = statAmount <= 0
    ? `${statistic.value}`
    : `${statistic.value} + ${statAmount}`  

  return (
    <>
      <li className={classes['character-stat']}>
        <div 
          className={classes['character-stat__info']}
          onMouseEnter={enableDescription}
          onMouseLeave={disableDescription}
        >
          <span className={classes['character-stat__info--name']}>{statistic.name}</span>
          <span className={classes['character-stat__info--value']}>{statValueText}</span>
        </div>
        {statistic.statName && <CharacterBuyStat 
          statValue={statistic.value + statAmount} 
          money={money}
          statAmmount={statAmount}
          onClick={buyStatHandler}
        />}
      </li>
      {isDescription && <CursorStickyContainer>
        <span>{statistic.description}</span>  
      </CursorStickyContainer>}
    </>
  )
}

export default CharacterStat;