import { ReactNode, useRef } from 'react';
import classes from './PresentationSlide.module.scss';
import { CSSTransition } from 'react-transition-group';

interface Props {
  children: ReactNode;
  title: string;
  isActive: boolean;
}

const PresentationSlide = ({title, children, isActive}: Props) => {
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isActive}
      timeout={0}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: classes['enter'],
        enterActive: classes['enter-active'],
        exit: classes['exit'],
        exitActive: classes['exit-active']
      }}
    >
      <div className={classes['presentation-slide']} ref={nodeRef}>
        <h1 
          className={classes['presentation-slide__title']}
        >
          {title}
        </h1>
        {children}
      </div>
    </CSSTransition>
  )
}

export default PresentationSlide;