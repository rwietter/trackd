import { styled } from '@/features/ui/theme';

export const ButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  margin: '0 auto',
  padding: '1.5rem 0 .5rem 0',

  'button + button': {
    marginLeft: '1.2rem',
  },
});

