import ShowMoreButton from 'components/button/ShowMoreButton/ShowMoreButton';
import { ReactNode, useRef, useState } from 'react';
import classes from './AccountManageContainer.module.scss';
import { CSSTransition } from 'react-transition-group';

interface Props {
  children: ReactNode,
  title: string;
  text: string;
}

const AccountManageContainer = ({
  children,
  title,
  text
}: Props) => {
  const nodeRef = useRef(null);

  const [isChildren, setIsChildren] = useState<boolean>(false);

  const toggleChildren = () => {
    setIsChildren(!isChildren);
  }

  return (
    <div className={classes['account-manage-container']}>
      <div className={classes['text-container']}>
        <h1 className={classes['text-container__title']}>
          {title}
        </h1>
        <p className={classes['text-container__text']}>
          {text}
        </p>
      </div>
      <CSSTransition
        nodeRef={nodeRef}
        in={isChildren}
        timeout={300}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: classes['enter'],
          enterActive: classes['enter-active'],
          exit: classes['exit'],
          exitActive: classes['exit-active']
        }}
      >
        <div ref={nodeRef} className={classes['children-container']}>
          {children}
        </div>
      </CSSTransition>
      <ShowMoreButton isActive={isChildren} onClick={toggleChildren} />
    </div>
  )
}

export default AccountManageContainer;