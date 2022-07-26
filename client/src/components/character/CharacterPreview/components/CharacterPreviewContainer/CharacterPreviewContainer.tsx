import { ReactNode } from 'react';
import classes from './CharacterPreviewContainer.module.scss';

interface Props {
  children: ReactNode;
}

const CharacterPreviewContainer = ({children}: Props) => {
  return (
    <div className={classes['character-preview-container']}>
      {children}
    </div>
  )
}

export default CharacterPreviewContainer;