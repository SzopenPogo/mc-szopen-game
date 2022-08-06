import CharacterSlideAvatar from 'pages/Landing/components/CharacterSlide/components/CharacterSlideAvatar/CharacterSlideAvatar';
import PresentationSlide from 'pages/Landing/components/PresentationSlide/PresentationSlide';
import classes from './CharacterSlide.module.scss';

interface Props {
  title: string;
  isActive: boolean;
}

const CharacterSlide = ({title, isActive}: Props) => {
  return (
    <PresentationSlide title={title} isActive={isActive}>
      <div className={classes['character-slide']}>
        <CharacterSlideAvatar />
      </div>
    </PresentationSlide>
  )
}

export default CharacterSlide;