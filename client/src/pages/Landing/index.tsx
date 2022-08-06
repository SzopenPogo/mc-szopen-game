import PlaySection from 'pages/Landing/components/PlaySection/PlaySection';
import PresentationSection from 'pages/Landing/components/PresentationSection/PresentationSection';
import classes from './index.module.scss';

const Landing = () => {
  return (
    <section className={classes['landing']}>
      <PlaySection />
      <PresentationSection />
    </section>
  )
}

export default Landing;