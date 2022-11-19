import { globalCss } from '@stitches/react';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Inter var, Inter, sans-serif',
  },
  body: {
    scrollBehavior: 'smooth',
  },
});
