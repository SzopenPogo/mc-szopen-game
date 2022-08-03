import timeIcon from 'assets/images/Icon/white/timeIcon.svg';
import DetailContainer from 'components/reward/DetailContainer/DetailContainer';

interface Props {
  missionDurationInSecounds: number;
}

const TimeDetail = ({missionDurationInSecounds}: Props) => {
  const missionDurationInMinutes = (missionDurationInSecounds / 60);
  return (
    <DetailContainer 
      text={missionDurationInMinutes.toString()} 
      image={timeIcon} 
      subText='min'
      title='Mission duration'
    />
  )
}

export default TimeDetail;