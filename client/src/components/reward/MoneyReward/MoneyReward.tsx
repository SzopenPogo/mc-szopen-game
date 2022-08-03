import moneyIcon from 'assets/images/Icon/white/moneyIcon.svg';
import DetailContainer from 'components/reward/DetailContainer/DetailContainer';

interface Props {
  money: number;
}

const MoneyReward = ({money}: Props) => {
  return (
    <DetailContainer 
      text={money.toString()} 
      image={moneyIcon} 
      subText='$'
      title='Mission money reward'
    />
  )
}

export default MoneyReward;