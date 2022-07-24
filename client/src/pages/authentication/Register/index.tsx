import AuthenticationLayout from "layouts/AuthenticationLayout/AuthenticationLayout";
import RegisterForm from "pages/authentication/Register/components/RegisterForm/RegisterForm";
import classes from './index.module.scss';

const Register = () => {
  return (
    <AuthenticationLayout>
      <section className={classes['register']}>
        <RegisterForm />
      </section>
    </AuthenticationLayout>
  )
}

export default Register;