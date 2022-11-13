import { st } from 'ui';

export const HeaderDashboard = st('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '1rem',
});

export const Title = st('h1', {
  fontSize: '2rem',
  fontFamily: '$sans, Raleway, sans-serif',
  fontWeight: 700,
  color: '$text',
});

export const ButtonWrapper = st('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '0 auto',
  padding: '1.5rem 0 .5rem 0',

  'button + button': {
    marginLeft: '1.2rem',
  },
});

