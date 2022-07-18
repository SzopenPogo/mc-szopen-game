import { ReactNode } from 'react';
import classes from './MainLayoutContent.module.scss';

interface Props {
  children: ReactNode;
}

const MainLayoutContent = ({children}: Props) => {
  return (
    <section className={classes['content']}>
      {children}
    </section>
  )
}

export default MainLayoutContent;