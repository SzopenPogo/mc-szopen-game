import { Dispatch } from '@reduxjs/toolkit';
import MinimalistButton from 'components/button/MinimalistButton/MinimalistButton';
import AccountManageModal from 'components/modal/AccountManageModal/AccountManageModal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from 'store';
import { logout } from 'store/account/actions/account-logout-actions';
import classes from './AccountManage.module.scss';

const AccountManage = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const token = useSelector((state: RootState) => state.account.token);

  const [isModal, setIsModal] = useState<boolean>(false);

  const logoutHandler = () => {
    dispatch(logout(token));
  }

  const toggleAccountManageModal = () => {
    setIsModal(!isModal);
  }

  return (
    <>
      <div className={classes['account-manage']}>
        <MinimalistButton
          title='Account'
          onClick={toggleAccountManageModal}
        />
        <MinimalistButton
          title='Logout'
          onClick={logoutHandler}
        />
      </div>
      <AccountManageModal
        isActive={isModal}
        closeModal={toggleAccountManageModal}
      />
    </>
  )
}

export default AccountManage;