import { styled } from '@/features/ui/theme';

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '1rem',
  fontFamily: 'Raleway',
});

export const Title = styled('h1', {
  all: 'unset',
  fontSize: '2rem',
  fontWeight: 700,
  color: '#303778',
});