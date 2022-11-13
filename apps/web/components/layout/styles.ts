import { st } from 'ui';

export const Wrapper = st('div', {
  flex: '1 1 auto',
  backgroundColor: '$bg',
  transition: '$transitonTheme',
  minHeight: '100vh',
  height: 'auto',
});

export const LayoutCss = st('div', {
  height: 'auto',
  minHeight: 'calc(100vh - 2rem)',
  padding: '2rem',
  transition: '$transitonTheme, all 350ms ease 0s',
  position: 'absolute',
  right: '0',
  top: '2rem',
  width: '100%',

  '&[data-menu="open"]': {
    width: 'calc(100% - 20rem)',
  },
});
