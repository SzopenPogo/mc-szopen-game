import MainForm from 'components/form/MainForm/MainForm';
import classes from './RegisterForm.module.scss';
import logo from 'assets/images/logo/logo.webp';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import AuthenticationLink from 'components/span/AuthenticationLink/AuthenticationLink';
import { LOGIN_ROUTE } from 'data/routes/clientRoutes';
import MainButton from 'components/button/MainButton/MainButton';
import AuthenticationError from 'components/span/AuthenticationError/AuthenticationError';
import EmailInput from 'components/input/EmailInput/EmailInput';
import PasswordInput from 'components/input/PasswordInput/PasswordInput';
import { useDispatch } from 'react-redux';
import { registerAccount } from 'store/account/actions/account-register-actions';
import { Dispatch } from '@reduxjs/toolkit';

const RegisterForm = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const {isEmailValid, isPasswordValid} = useSelector((state: RootState) => state.authentication);
  const {error} = useSelector((state: RootState) => state.account);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const registerHandler = (event: FormEvent) => {
    event.preventDefault();

    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    dispatch(registerAccount(emailValue, passwordValue));
  }

  useEffect(() => {
    //Check if form is valid
    const isValid = isEmailValid && isPasswordValid;
    setIsFormValid(isValid)
  }, [isEmailValid, isPasswordValid]);

  return (
    <div className={classes.register}>
      <MainForm
        onSubmit={registerHandler}
        logo={logo}
      >
        <EmailInput 
          ref={email} 
          title='Email Address'
        />
        <PasswordInput
          ref={password}
          title='Password'
        />

        <span>By selecting Sign up you agree you've read and accepted our User Agreement.</span>
        
        {error && <AuthenticationError error={error} />}

        <MainButton
          title='Sign up'
          isSubmit={true}
          isActive={isFormValid}
        />
      </MainForm>
      <AuthenticationLink
        title={'Have an account?'}
        linkTitle='Sign in'
        route={LOGIN_ROUTE}
      />
    </div>
  )
}

export default RegisterForm;