import Spinner from 'components/spinner/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import classes from './SpinnerFullscreen.module.scss';

const SpinnerFullscreen = () => {
  const isMobile = useSelector((state: RootState) => state.client.isMobile);

  const spinnerSize = isMobile ? '50vw' : '25vw'

  return (
    <div className={classes['spinner-fullscreen']}>
      <Spinner 
        color='white'
        borderSize='1rem'
        size={spinnerSize}
      />
    </div>
  )
}

export default SpinnerFullscreen;