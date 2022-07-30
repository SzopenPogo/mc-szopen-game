import { GAME_CLUBHOUSE_ROUTE } from 'data/routes/clientRoutes';
import { Link } from 'react-router-dom';
import classes from './ClubhouseLink.module.scss';

const ClubhouseLink = () => {
  return (
    <Link 
      to={GAME_CLUBHOUSE_ROUTE}
      className={classes['clubhouse-link']}
      title='Go to the clubhouse'
    />
  )
}

export default ClubhouseLink;