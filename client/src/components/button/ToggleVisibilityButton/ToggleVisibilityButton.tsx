import classes from './ToggleVisibilityButton.module.scss';

interface Props {
  onClick: () => void;
  isActive: boolean;
}

const ToggleVisibilityButton = ({onClick, isActive}: Props) => {

  const buttonClass = isActive 
    ? `${classes['toggle-visibility']} ${classes['toggle-visibility--active']}`
    : `${classes['toggle-visibility']}`

  return (
    <button 
      className={buttonClass}
      onClick={onClick}
      type='button'
    />
  )
}

export default ToggleVisibilityButton;