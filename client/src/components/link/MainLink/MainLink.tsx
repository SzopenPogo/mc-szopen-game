import { Link } from 'react-router-dom';
import classes from './MainLink.module.scss';

interface Props {
  route: string;
  title: string;
}

const MainLink = ({route, title}: Props) => {
  return (
    <Link
      to={route}
      className={classes['main-link']}
    >
      {title}
    </Link>
  )
}

export default MainLink;