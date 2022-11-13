import { st } from 'ui';

export const CardContainer = st('div', {
  background: '$card',
});

export const Card = st('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: '$card',
  padding: '1rem',
  paddingBottom: '2rem',
  borderRadius: '0.5rem',
  height: 'auto',

  marginTop: '1.5rem',

  '&[data-theme="light"]': {
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },

  '&:nth-of-type(1)': {
    border: '2px solid #1DA584',
  },

  variants: {
    borders: {
      segunda: {
        '&:nth-of-type(1)': {
          border: '2px solid #1DA584',
        },
      },
      terca: {
        '&:nth-of-type(1)': {
          border: '2px solid #9A36BB',
        },
      },
      quarta: {
        '&:nth-of-type(1)': {
          border: '2px solid #FFA07A',
        },
      },
      quinta: {
        '&:nth-of-type(1)': {
          border: '2px solid #FF69B4',
        },
      },
      sexta: {
        '&:nth-of-type(1)': {
          border: '2px solid #FFC0CB',
        },
      },
      disabled: {
        '&:nth-of-type(1)': {
          border: 'none',
        },
      },
    },
  },
});

export const CardHeader = st('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const CardTitle = st('h3', {
  all: 'unset',
  fontSize: '1.5rem',
  fontFamily: '$sans',
  fontWeight: 900,
  color: '#000',
  position: 'relative',
  '&::before': {
    content: '""',
    width: '5px',
    height: '40px',
    borderRadius: '5px',
    background: 'red',
    top: '-2.5px',
    left: '-16px',
    position: 'absolute',
  },

  '&[data-border="true"]': {
    '&::before': {
      left: '-19.6px',
    },
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

export const CardDate = st('p', {
  all: 'unset',
  fontSize: '1rem',
  fontFamily: '$sans',
  color: '$text',
  fontWeight: 500,
});

export const Records = st('div', {
  display: 'flex',
  justifyContent: 'space-between',
  background: '$card',
  width: '100%',
  paddingTop: '2rem',
});

export const Record = st('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: '$cardHover',
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

export const RecordIndicator = st('h3', {
  all: 'unset',
  fontSize: '1.7rem',
  fontFamily: '$sans',
  color: '$text',
  fontWeight: 900,
});

export const RecordTitle = st('h4', {
  all: 'unset',
  fontSize: '1.3em',
  paddingTop: '0.5rem',
  color: '$text',
  fontWeight: 500,
});

export const NoContent = st('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '15rem',

  textAlign: 'center',
  maxWidth: '35rem',
  margin: '0 auto',

  '@media (min-width: 768px)': {
    gridColumn: '1 / -1',
    height: '15rem',
  },

  'h2, p': {
    fontSize: '1.4rem',
    fontWeight: 700,
    fontFamily: '$sans',
    fontFeatureSettings:
      '"pnum" on, "lnum" on, "kern" on, "ss01" on, "ss02" on',
    fontVariantLigatures: 'common-ligatures',
    color: '#5D7B95',
    letterSpacing: '-0.03em',

    '@media (min-width: 768px)': {
      fontSize: '1.6rem',
    },
  },

  p: {
    fontSize: '1.2rem',
    fontWeight: 600,

    '@media (min-width: 768px)': {
      fontSize: '1.3rem',
    },
  },
});
