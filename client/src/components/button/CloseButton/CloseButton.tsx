import classes from './CloseButton.module.scss';

interface Props {
  onClick: () => void;
}

const CloseButton = ({onClick}: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={classes['close-button']}
    />
  )
}

export default CloseButton;