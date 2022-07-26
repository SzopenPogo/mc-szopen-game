import ImageLink from 'components/link/ImageLink/ImageLink';
import logo from 'assets/images/logo/logo.webp'

interface Props {
  route: string;
}

const LogoLink = ({route}: Props) => {
  return (
    <ImageLink route={route} image={logo} />
  )
}

export default LogoLink;