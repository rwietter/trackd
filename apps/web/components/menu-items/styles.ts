import { st } from 'ui';

export const MenuITemsLayout = st('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '15rem',
  borderRadius: '8px',
  padding: '0 0.5rem 2rem .5rem',
});

export const Items = st('nav', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '1rem',
  width: '100%',
  a: {
    all: 'unset',
    display: 'block',
    fontSize: '1.2rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: '$transitonTheme',
    color: '$text',
    fontFamily: 'Raleway, sans-serif',
    fontVariantLigatures: 'common-ligatures',

    '&:hover': {
      color: '$text',
    },
  },
});

export const Item = st('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0.8rem 1.4rem',
  borderRadius: '8px',
  width: '100%',
  transition: '$transitonTheme, border 350ms ease 0s',
  '& svg': {
    marginRight: '0.7rem',
  },
  '& + &': {
    marginTop: '1rem',
  },
  '&:hover': {
    backgroundColor: '$fg',
  },
  '&.active': {
    backgroundColor: '$fg',
    border: '1px solid $borderColor',
  },
  '&.active a': {
    color: '$zen1',
  },
});
