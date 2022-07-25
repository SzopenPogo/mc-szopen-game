import AccountManageEdit from 'components/modal/AccountManageModal/components/AccountManageEdit/AccountManageEdit';
import AccountManageLogoutAll from 'components/modal/AccountManageModal/components/AccountManageLogoutAll/AccountManageLogoutAll';
import Modal from 'components/modal/Modal/Modal';

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
      <AccountManageLogoutAll />
      <AccountManageEdit />
    </Modal>
  )
}

export default AccountManageModal;