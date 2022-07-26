import classes from './CharacterPreviewInfo.module.scss';

interface Props {
  title?: string;
  data: string;
  textAlign?: string;
}

const CharacterPreviewInfo = ({
  title, 
  data, 
  textAlign = 'left'
}: Props) => {
  return (
    <span 
      className={classes['character-preview-data']}
    >
      {data} {title && <span className={classes['character-preview-title']}>{title}</span>}
    </span>
  )
}

export default CharacterPreviewInfo;