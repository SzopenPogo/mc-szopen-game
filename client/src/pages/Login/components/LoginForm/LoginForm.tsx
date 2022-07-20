import MainForm from "components/form/MainForm/MainForm";
import logo from 'assets/images/logo/logo.webp';
import classes from './LoginForm.module.scss';
import EmailInput from "components/input/EmailInput/EmailInput";
import { FormEvent, useRef } from "react";

const LoginForm = () => {
  const email = useRef<HTMLInputElement>(null);
  const loginUserHandler = (event: FormEvent) => {
    event.preventDefault();

    console.log(email.current!.value);
  }

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
      </MainForm>
    </div>
  )
}

export default LoginForm;