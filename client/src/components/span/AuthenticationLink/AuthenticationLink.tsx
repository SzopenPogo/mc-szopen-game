import { Link } from 'react-router-dom';
import classes from './AuthenticationLink.module.scss';

interface Props {
  title: string;
  linkTitle: string;
  route: string;
}

const AuthenticationLink = ({
  title,
  linkTitle,
  route
}: Props) => {
  return (
    <span className={classes['authentication-link']}>
      {title} <Link 
        to={route}
        className={classes['authentication-link--link']}
      >
        {linkTitle}
      </Link>
    </span>
  )
}

export default AuthenticationLink;