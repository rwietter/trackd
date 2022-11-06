import { styled } from '@stitches/react';

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  bottom: 0,
  background: '#fff',
  width: '100%',
  height: '60px',

  nav: {
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
});
