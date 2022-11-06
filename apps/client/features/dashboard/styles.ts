/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '../../styles/styles';

export const Dashboard = styled('div', {
  padding: '0 1rem',
  diplsay: 'flex',
  flexDirection: 'column',

  '@media (min-width: 768px)': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    maxWidth: '70rem',
    margin: '0 auto',
    gap: '1rem',
  },
});

export const Card = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: '#fff',
  padding: '1rem',
  paddingBottom: '2rem',
  borderRadius: '0.5rem',
  height: 'auto',

  marginTop: '1.5rem',
});

export const CardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const CardTitle = styled('h3', {
  fontSize: '1.25rem',
  fontFamily: '$sans',
  fontWeight: 800,
  color: '#000',
  position: 'relative',
  '&::before': {
    content: '""',
    width: '5px',
    height: '27px',
    borderRadius: '5px',
    background: 'red',
    top: '-2px',
    left: '-16px',
    position: 'absolute',
  },

  variants: {
    color: {
      segunda: {
        color: '#1DA584',
        '&::before': {
          background: '#1DA584',
        },
      },
      terca: {
        color: '#9A36BB',
        '&::before': {
          background: '#9A36BB',
        },
      },
      quarta: {
        color: '#FFA07A',
        '&::before': {
          background: '#FFA07A',
        },
      },
      quinta: {
        color: '#FF69B4',
        '&::before': {
          background: '#FF69B4',
        },
      },
      sexta: {
        color: '#FFC0CB',
        '&::before': {
          background: '#FFC0CB',
        },
      },
    },
  },
});

export const CardDate = styled('p', {
  all: 'unset',
  fontSize: '0.875rem',
  fontFamily: '$sans',
  fontWeight: 400,
  color: '#9BB6CD !important',
});

export const Records = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  background: '#FFF',
  width: '100%',
  paddingTop: '2rem',
});

export const Record = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#F5F5F6',
  padding: '1.7rem 1rem',
  width: '100%',
  borderRadius: '0.5rem',

  '& + &': {
    marginLeft: '1rem',
  },

  '&:first-child': {
    width: 'calc(100% - 1rem)',
  },
});

export const RecordIndicator = styled('h3', {
  all: 'unset',
  fontSize: '1.7rem',
  fontFamily: '$sans',
  fontWeight: 900,
});

export const RecordTitle = styled('h4', {
  all: 'unset',
  paddingTop: '0.5rem',
  color: '#5D7B95',
});
