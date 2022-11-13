import { st } from 'ui';

export const HeaderContent = st('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 1rem',
});

export const Title = st('h1', {
  all: 'unset',
  fontSize: '2.4rem',
  fontWeight: 900,
  letterSpacing: '-0.03em',
  fontFeatureSettings: '"pnum" on, "lnum" on, "kern" on, "ss01" on, "ss02" on',
  fontVariantLigatures: 'common-ligatures',
  fontFamily: '$sans',
  lineHeight: '1.4',
});

export const Description = st('p', {
  all: 'unset',
  fontSize: '1.1rem',
  fontWeight: 400,
  textAlign: 'center',
  letterSpacing: '-0.05em',
  fontFamily: '$sans',
  fontFeatureSettings: '"pnum" on, "lnum" on, "kern" on, "ss01" on, "ss02" on',
  fontVariantLigatures: 'common-ligatures',
});
