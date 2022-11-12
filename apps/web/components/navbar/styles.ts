import { styled } from '@/features/ui/theme';

export const Container = styled('div', {
  position: 'relative',
});

export const NavBarLayout = styled('header', {
  width: '100%',
  maxWidth: '20rem',
  padding: '2rem 0.5rem 2rem 2rem',
  zIndex: 1,
  marginTop: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  minHeight: 'calc(100vh - 4.7rem)',
  transition: 'all 0.3s ease-in-out',

  '&[data-menu="true"]': {
    transform: 'translateX(-100%)',
  },
});

export const Button = styled('button', {
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
