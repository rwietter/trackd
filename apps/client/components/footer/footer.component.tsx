import Link from 'next/link';

import { CalendarIcon } from '../../assets/icons/calendar.svg';
import { HomeIcon } from '../../assets/icons/home.svg';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <nav>
        <div>
          <Link href="/">
            <HomeIcon fontSize={30} cursor="pointer" />
          </Link>
        </div>
        <div>
          <Link href="/filtrar">
            <CalendarIcon fontSize={30} cursor="pointer" />
          </Link>
        </div>
      </nav>
    </S.Footer>
  );
};

export { Footer };
