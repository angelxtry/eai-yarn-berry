import { RoutePath } from '@/router/paths';
import { Link } from 'react-router-dom';
import LogoSvg from '@/assets/LogoSvg.svg';

export const Logo = ({ collapse }: { collapse?: boolean }) => (
  <Link to={RoutePath.home}>
    <img
      src={LogoSvg}
      alt='Gomi EAI admin logo'
      className={`${collapse ? 'w-12' : 'w-24'}`}
    />
  </Link>
);
