import classes from './MainButton.module.scss';

interface Props {
  title: string;
  isSubmit?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

const MainButton = ({
  title,
  isSubmit = false,
  onClick,
  isActive = false
}: Props) => {
  const buttonType = isSubmit ? 'submit' : 'button';
  
  return (
    <button
      className={classes['main-button']}
      type={buttonType}
      onClick={onClick}
      disabled={!isActive}
    >
      {title}
    </button>
  )
}

export default MainButton;