import classes from './DetailContainer.module.scss';

interface Props {
  text: string;
  subText?: string;
  image: string;
  title: string;
}

const DetailContainer = ({
  text,
  subText,
  image,
  title
}: Props) => {
  return (
    <div 
      className={classes['reward-container']}
      title={title}
    >
      <img src={image} alt={`${text}-img`} className={classes['reward-container__image']} />
      <span className={classes['reward-container__text']}>{text}</span>
      {subText && <span className={classes['reward-container__text']}>{subText}</span>}
    </div>
  )
}

export default DetailContainer;