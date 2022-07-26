import AccountManageEdit from 'components/modal/AccountManageModal/components/AccountManageEdit/AccountManageEdit';
import AccountManageLogoutAll from 'components/modal/AccountManageModal/components/AccountManageLogoutAll/AccountManageLogoutAll';
import Modal from 'components/modal/Modal/Modal';
import classes from './AccountManageModal.module.scss'

interface Props {
  isActive: boolean;
  closeModal: () => void;
}

const AccountManageModal = ({isActive, closeModal}: Props) => {
  return (
    <Modal
      activate={isActive}
      timeout={100}
      closeModal={closeModal}
    >
      <section className={classes['account-edit-modal']}>
        <AccountManageLogoutAll />
        <AccountManageEdit />
      </section>
    </Modal>
  )
}

export default AccountManageModal;