import AuthenticationLayout from "layouts/AuthenticationLayout/AuthenticationLayout";
import LoginForm from "pages/authentication/Login/components/LoginForm/LoginForm";
import classes from './index.module.scss';

const Login = () => {
  return (
    <AuthenticationLayout>
      <section className={classes['login']}>
        <LoginForm />
      </section>
    </AuthenticationLayout>
  )
}

export default Login;