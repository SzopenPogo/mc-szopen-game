import CharacterSelectContainer from 'components/modal/CharacterSelectModal/components/CharacterSelectContainer/CharacterSelectContainer';
import Modal from 'components/modal/Modal/Modal';
import classes from './CharacterSelectModal.module.scss';
import logo from 'assets/images/logo/logo.webp';
import MainLink from 'components/link/MainLink/MainLink';
import { GAME_CHARACTER_CREATE_ROUTE } from 'data/routes/clientRoutes';

interface Props {
  activate: boolean;
  timeout: number;
}

const CharacterSelectModal = ({activate, timeout}: Props) => {
  
  return (
    <Modal
      activate={activate}
      timeout={timeout}
    >
      <div className={classes['character-select-modal']}>
        <img className={classes['character-select-modal__logo']} src={logo} alt='logo' />
        <h1 className={classes['character-select-modal__title']}>Select character</h1>
        <CharacterSelectContainer />
        <span>or</span>
        <MainLink route={GAME_CHARACTER_CREATE_ROUTE} title={'Create new character'} />
      </div>
    </Modal>
  )
}

export default CharacterSelectModal;