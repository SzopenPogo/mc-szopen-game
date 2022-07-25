import classes from './MinimalistButton.module.scss';

interface Props {
  title: string;
  isSubmit?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}

const MinimalistButton = ({
  title,
  isSubmit = false,
  onClick,
  isActive = true
}: Props) => {
  const buttonType = isSubmit ? 'submit' : 'button';

  return (
    <button
      className={classes['minimalist-button']}
      type={buttonType}
      onClick={onClick}
      disabled={!isActive}
    >
      {title}
    </button>
  )
}

export default MinimalistButton;