import { ReactNode, useEffect, useState } from 'react';
import classes from './CursorStickyContainer.module.scss';

interface Props {
  children: ReactNode;
}

const CursorStickyContainer = ({children}: Props) => {
  const [clientXPosition, setClientXPosition] = useState<number>(0);
  const [clientYPosition, setClientYPosition] = useState<number>(0);

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setClientXPosition(clientX+10);
      setClientYPosition(clientY+10);
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div
      className={classes['cursor-sticky-container']}
      style={{
        top: clientYPosition,
        left: clientXPosition
      }}
    >
      {children}
    </div>
  )
}

export default CursorStickyContainer;