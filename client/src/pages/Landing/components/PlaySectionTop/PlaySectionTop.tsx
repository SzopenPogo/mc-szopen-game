import ImageLink from 'components/link/ImageLink/ImageLink';
import logo from 'assets/images/logo/logo.webp';
import MainLink from 'components/link/MainLink/MainLink';
import { LOGIN_ROUTE, REGISTER_ROUTE } from 'data/routes/clientRoutes';
import classes from './PlaySectionTop.module.scss';

const PlaySectionTop = () => {
  return (
    <div className={classes.top}>
      <div className={classes.logo}>
        <ImageLink route='/' image={logo} />
      </div>
      <div className={classes.title}>
        <h1>Brotherhood needs you</h1>
        <h3>Play MC today and become a biker today!</h3>
      </div>
      <div className={classes.links}>
        <MainLink route={LOGIN_ROUTE} title={'Sign in'} />
        <MainLink route={REGISTER_ROUTE} title={'Create Account'} />
      </div>
    </div>
  )
}

export default PlaySectionTop;