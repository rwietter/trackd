import { styled } from '@/features/ui/theme';

export const MenuITemsLayout = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '15rem',
  borderRadius: '8px',
  padding: '2rem 0.5rem',
});

export const Items = styled('nav', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: '3rem',
  a: {
    all: 'unset',
    display: 'block',
    fontSize: '1.3rem',
    cursor: 'pointer',
    fontWeight: 400,
    transition: 'color 0.2s ease',
    color: '#7D8085',
    fontFamily: 'Prompt',

    '&:hover': {
      color: '#303778',
    },
  },
});

export const Item = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '0.8rem 1.4rem',
  borderRadius: '8px',
  width: '100%',
  transition: 'background 0.2s ease',
  '& svg': {
    marginRight: '0.7rem',
  },
  '& + &': {
    marginTop: '1rem',
  },
  '&:hover': {
    backgroundColor: '#F5F8FE',
  },
  '&.active': {
    backgroundColor: '#F5F8FE',
  },
  '&.active a': {
    color: '#303778',
  },
});
