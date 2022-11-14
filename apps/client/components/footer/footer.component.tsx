/* eslint-disable prettier/prettier */
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CalendarIcon } from '../../assets/icons/calendar.svg';
import { HomeIcon } from '../../assets/icons/home.svg';
import { useTheme, ThemeStore } from '../../store';
import * as S from './styles';

const Footer = () => {
  const { theme } = useTheme() as ThemeStore
  const { pathname: path } = useRouter();

  const makeClass = (name: string) => name === path ? 'active' : 'inactive';

  return (
    <S.Footer theme={theme}>
      <nav>
        <div className='nav-icon'>
          <Link href="/">
            <HomeIcon
              className={makeClass('/')}
              fontSize={30}
              cursor="pointer"
            />
          </Link>
        </div>
        <div className='nav-icon'>
          <Link href="/filtrar">
            <CalendarIcon
              fontSize={30}
              className={makeClass('/filtrar')}
              cursor="pointer"
            />
          </Link>
        </div>
      </nav>
    </S.Footer>
  );
};

export default Footer;
