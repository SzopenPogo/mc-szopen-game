import PresentationSelectButton from 'pages/Landing/components/PresentationSelectButton/PresentationSelectButton';
import { useState } from 'react';
import classes from './PresentationSection.module.scss';
import characterImage from 'assets/images/character/characterAvatarPlaceholder.webp';
import clubhouseImage from 'assets/images/layout/clubhouse.webp';
import bikerImage from 'assets/images/layout/missionBiker.webp';
import CharacterSlide from 'pages/Landing/components/CharacterSlide/CharacterSlide';
import BrotherhoodSlide from 'pages/Landing/components/BrotherhoodSlide/BrotherhoodSlide';
import FightSlide from 'pages/Landing/components/FightSlide/FightSlide';

const SLIDES = [{
  _id: 0,
  title: 'Create own character',
  image: characterImage
}, {
  _id: 1,
  title: 'Join to the brotherhood',
  image: clubhouseImage
}, {
  _id: 2,
  title: 'Fight for respect',
  image: bikerImage
}]

const PresentationSection = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  

  const activeSlideHandler = (sliderId: number) => {
    setActiveSlide(sliderId);
  }

  const renderSlideButtons = SLIDES.map(slide => (
    <PresentationSelectButton
      key={slide._id}
      title={slide.title}
      value={slide._id}
      isSelected={slide._id === activeSlide}
      image={slide.image}
      onClick={activeSlideHandler}
    />
  ));


  return (
    <section className={classes['presentation']}>
      <div className={classes['presentation__buttons']}>
        {renderSlideButtons}
      </div>
      <CharacterSlide 
        title={SLIDES[0].title}
        isActive={activeSlide === 0}
      />
      <BrotherhoodSlide
        title={SLIDES[1].title}
        isActive={activeSlide === 1}
      />
      <FightSlide title={SLIDES[2].title} isActive={activeSlide === 2} />
    </section>
  )
}

export default PresentationSection;