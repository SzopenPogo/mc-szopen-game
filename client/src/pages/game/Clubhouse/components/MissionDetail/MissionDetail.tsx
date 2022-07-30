import classes from './MissionDetail.module.scss';

interface Props {
  text: string;
  subText?: string;
  image: string;
  title: string;
}

const MissionDetail = ({
  text,
  subText,
  image,
  title
}: Props) => {
  return (
    <div 
      className={classes['mission-detail']}
      title={title}
    >
      <img src={image} alt={`${text}-img`} className={classes['mission-detail__image']} />
      <span className={classes['mission-detail__text']}>{text}</span>
      {subText && <span className={classes['mission-detail__text']}>{subText}</span>}
    </div>
  )
}

export default MissionDetail;