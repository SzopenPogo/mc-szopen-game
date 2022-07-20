import { FormEvent, ReactNode } from 'react';
import classes from './MainForm.module.scss';

interface Props {
  children: ReactNode;
  onSubmit: (event: FormEvent) => void;
  title?: string;
  logo?: string;
  descripton?: string;
}

const MainForm = ({
  children, 
  onSubmit,
  title,
  logo,
  descripton
}: Props) => {
  return (
    <form 
      className={classes['main-form']}
      onSubmit={onSubmit}
    >
      {logo && <img src={logo} alt='logo' className={classes.logo}
      />}
      {title && <h1 className={classes['title']}>{title}</h1>}
      {descripton && <h6 className={classes['description']}>{descripton}</h6>}
      {children}
    </form>
  )
}

export default MainForm;