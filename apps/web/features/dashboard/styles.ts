import { styled } from '@/features/ui/theme';

export const HeaderDashboard = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Title = styled('h1', {
  fontSize: '2rem',
  fontFamily: 'Raleway',
  fontWeight: 700,
  color: '#303778',
});

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

