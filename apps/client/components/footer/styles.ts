import { st } from 'ui';

export const Footer = st('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  bottom: 0,
  background: '$mediumBackground',
  backdropFilter: 'blur(10px)',
  width: '100%',
  height: '60px',

  nav: {
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },

  variants: {
    theme: {
      dark: {
        svg: {
          stroke: '$text',
        },
      },
      light: {
        svg: {
          stroke: '$text',
        },
      },
    },
  },
});
