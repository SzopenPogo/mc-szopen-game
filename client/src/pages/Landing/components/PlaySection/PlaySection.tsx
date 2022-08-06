import PlaySectionTop from 'pages/Landing/components/PlaySectionTop/PlaySectionTop';
import classes from './PlaySection.module.scss';

const PlaySection = () => {
  return (
    <section className={classes['play']}>
      <PlaySectionTop />
    </section>
  )
}

export default PlaySection;