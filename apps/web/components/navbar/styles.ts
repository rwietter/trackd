import { st } from 'ui';

export const Container = st('div', {
  position: 'relative',
});

export const NavBarLayout = st('header', {
  width: '100%',
  maxWidth: '20rem',
  padding: '2rem 0.5rem 2rem 2rem',
  borderRight: '1px solid $borderColor',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: '$bg',
  minHeight: 'calc(100vh - 3.8rem)',
  transition: '$transitonTheme, all 350ms ease 0s',
  transform: 'translateX(-100%)',

  '&[data-menu="open"]': {
    transform: 'translateX(0)',
  },
});

export const Button = st('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  width: '3rem',
  height: '3rem',
  position: 'absolute',
  top: '25rem',
  left: '2rem',
  zIndex: 10,

  '&[data-open="true"]': {
    backgroundColor: '#000',
    color: '#FFF',
    borderRadius: '50%',
  },
});
