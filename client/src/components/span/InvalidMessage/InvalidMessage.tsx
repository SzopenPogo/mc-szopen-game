import classes from './InvalidMessage.module.scss';

interface Props {
  message: string;
}

const InvalidMessage = ({message}: Props) => {
  return (
    <span className={classes['invalid-message']}>{message}</span>
  )
}

export default InvalidMessage;