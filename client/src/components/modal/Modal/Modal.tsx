import Backdrop from 'components/Backdrop/Backdrop';
import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';
import { CSSTransition } from 'react-transition-group';
import CloseButton from 'components/button/CloseButton/CloseButton';

interface Props {
  children: ReactNode;
  activate: boolean;
  timeout: number;
  closeModal?: () => void;
}

const Modal = ({
  children,
  activate,
  timeout,
  closeModal
}: Props) => {
  const nodeRef = useRef(null);
  return createPortal(
    <>
      <Backdrop 
        timeout={timeout}
        activate={activate}
        onClick={closeModal ? closeModal : () => {}}
      />
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
        <div ref={nodeRef} className={classes['modal']}>
          {closeModal && <div className={classes['modal--close-button']}>
            <CloseButton onClick={closeModal} />
          </div>}  
          {children}
        </div>
    </CSSTransition>
    </>
  , document.getElementById('modal')!)
}

export default Modal;