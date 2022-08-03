import plusIcon from 'assets/images/Icon/white/plusIcon.svg';
import DetailContainer from 'components/reward/DetailContainer/DetailContainer';

interface Props {
  experience: number;
}

const ExpReward = ({experience}: Props) => {
  return (
    <DetailContainer 
      text={experience.toString()} 
      image={plusIcon} 
      subText='exp'
      title='Mission experience reward'
    />
  )
}

export default ExpReward;