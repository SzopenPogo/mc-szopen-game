import { Dispatch } from '@reduxjs/toolkit';
import MainButton from 'components/button/MainButton/MainButton';
import EmailInput from 'components/input/EmailInput/EmailInput';
import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import AccountManageContainer from 'components/modal/AccountManageModal/components/AccountManageContainer/AccountManageContainer';
import { AccountEdit } from 'data/interfaces/account/AccountEdit';
import { FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { editAccount } from 'store/account/actions/account-edit-actions';
import classes from './AccountManageEdit.module.scss';

const AccountManageEdit = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const emailInput = useRef<HTMLInputElement>(null);
  const newPasswordInput = useRef<HTMLInputElement>(null);
  const currentPasswordInput = useRef<HTMLInputElement>(null);
  
  const { account, token } = useSelector((state: RootState) => state.account);
  const { email } = account;

  const submintEditAccountHandler = (event: FormEvent) => {
    event.preventDefault();

    const emailValue = emailInput.current!.value;
    const newPasswordValue = newPasswordInput.current!.value;
    const currentPasswordValue = currentPasswordInput.current!.value;

    if(!emailValue && !newPasswordValue) {
      emailInput.current!.focus();
      return;
    }

    const editData = {
      email: emailValue,
      password: newPasswordValue,
      currentPassword: currentPasswordValue
    } as AccountEdit;

    dispatch(editAccount(token, editData));
  }

  const text = 'Edit account data like email address or password'

  return (
    <AccountManageContainer
      title='Edit Data'
      text={text}
    >
      <form className={classes['account-manage-form']} onSubmit={submintEditAccountHandler}>
        <EmailInput
          ref={emailInput} 
          title='Email' 
          value={email}
        />
        <PasswordInput 
          ref={newPasswordInput}
          title='New password'
        />
        <PasswordInput
          ref={currentPasswordInput}
          title='Current password'
          isRequired={true}
        />
        <MainButton
          title='Edit'
          isSubmit={true}
        />
      </form>
    </AccountManageContainer>
  )
}

export default AccountManageEdit;