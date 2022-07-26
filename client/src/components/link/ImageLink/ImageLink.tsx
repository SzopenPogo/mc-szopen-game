import { Link } from 'react-router-dom';
import classes from './ImageLink.module.scss';

interface Props {
  route: string;
  image: string;
}

const ImageLink = ({route, image}: Props) => {
  return (
    <Link 
      to={route}
      className={classes['image-link']}
      style={{
        backgroundImage: `url(${image})`
      }}
    />
  )
}

export default ImageLink;