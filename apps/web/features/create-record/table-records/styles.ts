import { st } from 'ui';

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

