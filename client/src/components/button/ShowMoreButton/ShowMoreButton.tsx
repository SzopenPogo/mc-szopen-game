import classes from './ShowMoreButton.module.scss';

interface Props {
  isActive: boolean;
  onClick: () =>  void;
}

const ShowMoreButton = ({isActive, onClick}: Props) => {
  const buttonClass = isActive
    ? `${classes['show-more-button']} ${classes['show-more-button--active']}`
    : `${classes['show-more-button']}`;

  return (
    <button className={buttonClass}
      type='button'
      onClick={onClick}
    />
  )
}

export default ShowMoreButton;