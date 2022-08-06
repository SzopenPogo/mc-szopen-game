import PresentationSlide from 'pages/Landing/components/PresentationSlide/PresentationSlide';
import classes from './BrotherhoodSlide.module.scss';

interface Props {
  title: string;
  isActive: boolean;
}

const BrotherhoodSlide = ({title, isActive}: Props) => {

  const scrollTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <PresentationSlide title={title} isActive={isActive}>
      <div 
        className={classes['brotherhood-slide']}
        onClick={scrollTop}
      >
        <div className={classes['brotherhood-slide__hood']}>
          <div className={classes['brotherhood-slide_quest-giver']} />
        </div>
      </div>
    </PresentationSlide>
  )
}

export default BrotherhoodSlide;