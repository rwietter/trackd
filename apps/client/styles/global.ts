import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Inter var, Inter, sans-serif',
    fontFeatureSettings:
      "'ss01', 'ss02', 'ss03', 'ss03', 'ss03', 'ss04', 'ss05', 'ss06', 'ss07', 'ss08', 'ss09', 'ss10', 'salt' 1",
    fontVariantLigatures: 'common-ligatures',
  },
  body: {
    scrollBehavior: 'smooth',
  },
  'h1, h2, h3': {
    lineHeight: '1.1',
  },
});
