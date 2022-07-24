import classes from './Backdrop.module.scss';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

interface Props {
  activate: boolean;
  timeout: number;
  onClick: () => void;
}

const Backdrop = ({onClick, activate, timeout}: Props) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={activate}
      timeout={timeout}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes['enter'],
        enterActive: classes['enter-active'],
        exit: classes['exit'],
        exitActive: classes['exit-active']
      }}
    >
      <div className={classes.backdrop} onClick={onClick} ref={nodeRef} />
    </CSSTransition>
  )
}

export default Backdrop;