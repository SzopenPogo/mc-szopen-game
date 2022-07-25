import { Dispatch } from "@reduxjs/toolkit";
import MainButton from "components/button/MainButton/MainButton";
import AccountManageContainer from "components/modal/AccountManageModal/components/AccountManageContainer/AccountManageContainer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "store";
import { logoutAll } from "store/account/actions/account-logoutall-actions";

const AccountManageLogoutAll = () => {
  const dispatch = useDispatch() as Dispatch<any>;
  const token = useSelector((state: RootState) => state.account.token);

  const logoutAllHandler = () => {
    dispatch(logoutAll(token));
  }

  const logoutAllText = 'Logout from all devices';

  return (
    <AccountManageContainer 
      title='Logout all'
      text={logoutAllText}>
      <MainButton
        title='Logout all'
        onClick={logoutAllHandler}
      />
    </AccountManageContainer>
  )
}

export default AccountManageLogoutAll;