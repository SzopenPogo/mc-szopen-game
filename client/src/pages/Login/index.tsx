import MainLayout from "layouts/MainLayout/MainLayout";
import LoginForm from "pages/Login/components/LoginForm/LoginForm";
import classes from './index.module.scss';

const Login = () => {
  return (
    <MainLayout>
      <section className={classes['login']}>
        <LoginForm />
      </section>
    </MainLayout>
  )
}

export default Login;