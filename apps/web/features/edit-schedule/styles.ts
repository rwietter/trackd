import { st } from 'ui';

export const Header = st('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '1rem',
  marginTop: '1rem',
});

export const Title = st('h1', {
  all: 'unset',
  fontSize: '2rem',
  fontFamily: '$sans, Raleway, sans-serif',
  fontWeight: 700,
  color: '$text',
});