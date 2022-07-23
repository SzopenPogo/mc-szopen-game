import classes from './AuthenticationError.module.scss';

interface Props {
  error: string;
}

const AuthenticationError = ({error}: Props) => {
  return (
    <span className={classes['authentication-error']}>{error}</span>
  )
}

export default AuthenticationError;