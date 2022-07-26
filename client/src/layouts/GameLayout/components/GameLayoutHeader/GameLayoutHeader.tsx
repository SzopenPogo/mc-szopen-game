import AccountManage from 'components/containers/AccountManageContainer/AccountManage';
import LogoLink from 'components/link/LogoLink/LogoLink';
import { GAME_ROUTE } from 'data/routes/clientRoutes';
import classes from './GameLayoutHeader.module.scss';

const GameLayoutHeader = () => {
  return (
    <header className={classes['game-layout-header']}>
      <div className={classes['game-layout-header__logo']}>
        <LogoLink route={GAME_ROUTE} />
      </div>
      <AccountManage />
    </header>
  )
}

export default GameLayoutHeader;