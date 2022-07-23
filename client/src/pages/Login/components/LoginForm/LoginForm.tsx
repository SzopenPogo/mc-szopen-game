import MainForm from "components/form/MainForm/MainForm";
import logo from 'assets/images/logo/logo.webp';
import classes from './LoginForm.module.scss';
import EmailInput from "components/input/EmailInput/EmailInput";
import { FormEvent, useEffect, useRef, useState } from "react";
import PasswordInput from "components/input/PasswordInput/PasswordInput";
import MainButton from "components/button/MainButton/MainButton";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { REGISTER_ROUTE } from "data/routes/clientRoutes";
import AuthenticationLink from "components/span/AuthenticationLink/AuthenticationLink";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { login } from "store/account/actions/account-login-actions";
import AuthenticationError from "components/span/AuthenticationError/AuthenticationError";

const LoginForm = () => {
  const dispatch = useDispatch() as Dispatch<any>;

  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const {isEmailValid, isPasswordValid} = useSelector((state: RootState) => state.authentication);
  const {error} = useSelector((state: RootState) => state.account);

  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const loginUserHandler = (event: FormEvent) => {
    event.preventDefault();

    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    dispatch(login(emailValue, passwordValue));
  }

  useEffect(() => {
    //Check if form is valid
    const isValid = isEmailValid && isPasswordValid;
    setIsFormValid(isValid)
  }, [isEmailValid, isPasswordValid]);

  return (
    <div className={classes.login}>
      <MainForm 
        onSubmit={loginUserHandler}
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
        
        {error && <AuthenticationError error={error} />}

        <MainButton
          title='Log in'
          isSubmit={true}
          isActive={isFormValid}
        />
      </MainForm>

      <AuthenticationLink
        title={'Don\'t have an account?'}
        linkTitle='Sign up'
        route={REGISTER_ROUTE}
      />
    </div>
  )
}

export default LoginForm;