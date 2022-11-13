import { st } from 'ui';

export const Header = st('header', {
  display: 'flex',
  background: '$mediumBackground',
  height: '60px',
  alignItems: 'center',
  padding: '0 1rem',
  justifyContent: 'space-between',

  '@bp5': {
    padding: '0 10rem',
  },
});

export const DarkMode = st('button', {
  background: 'none',
  color: '$text',
  outline: 'none',
  width: '1.8rem',
  height: '1.8rem',
  border: 'none',
  cursor: 'pointer',
});

export const Trackd = st('h2', {
  all: 'unset',
  fontSize: '1.5rem',
  fontFamily: '$sans',
  fontWeight: 900,
  textGradient: 'linear-gradient(90deg, #FF5F6D 0%, #FFC371 100%)',
});
