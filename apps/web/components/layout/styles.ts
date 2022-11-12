import { st } from 'ui';

export const Wrapper = st('div', {
  flex: '1 1 auto',
  backgroundColor: '#F0F3FA',
  backgroundImage: 'linear-gradient(to right top, #F0F3FA, #ffffff)',
  minHeight: '100vh',
  height: 'auto',
});

export const LayoutCss = st('div', {
  height: 'auto',
  minHeight: 'calc(100vh - 2rem)',
  padding: '2rem',
  transition: 'all .2s linear 0s',
  width: 'calc(100% - 20rem)',
  position: 'absolute',
  right: '0',
  top: '2rem',

  '&[data-menu="true"]': {
    width: '100%',
  },
});
