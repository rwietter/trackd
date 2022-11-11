import { createStitches } from '@stitches/react';

const {
  theme: darkTheme,
  styled,
  keyframes,
  css,
  globalCss,
  reset,
  getCssText,
} = createStitches({
  theme: {
    colors: {
      background: '#0c0c0e',
      mediumBackground: '#0f0f11',
      mediumBackgroundHover: '#202230',
      card: 'linear-gradient(to right top, #0c0c0e, #0e0e10, #0f0f11, #111113, #121214);',
      cardHover: 'linear-gradient(to right top, #0e0e10, #101012, #131316, #17171A, #1B1B1D);',
      linearBackground:
        'linear-gradient(180deg,rgba(35,37,49,.5),rgba(15,15,24,.5));',
      gradient:
        'linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );',
      highlight145: 'linear-gradient(145deg, #8257e5, #c1b);',
      highlight30: 'linear-gradient(43deg, #74ebd5, #9face6);',
      gradientGreen: 'linear-gradient(135deg, #80ffea 0%, #8aff80 100%);',
      gradientYellow: 'linear-gradient(135deg, #ffff80 0%, #ff80bf 100%);',
      text: '#D7D7D7',
    },
    space: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      7: '3.0rem',
      8: '3.6rem',
      9: '4.4rem',
      10: '5.2rem',
    },
    transitions: {
      transitonTheme: 'color 350ms ease 0s, background 350ms ease 0s',
      transitonThemeWidth:
        'width 350ms ease 0s, color 350ms ease 0s, background 350ms ease 0s',
    },
    fonts: {
      primary: `'Roboto', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
      secondary: `'Poppins', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;`,
    },
    fontSizes: {
      1: '0.8rem',
      2: '1rem',
      3: '1.2rem',
      4: '1.4rem',
      5: '1.6rem',
      6: '1.8rem',
      7: '2rem',
      8: '2.2rem',
      9: '2.5rem',
      10: '3rem',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 620px)',
    bp3: '(min-width: 720px)',
    bp4: '(min-width: 970px)',
    bp5: '(min-width: 1100px)',
  },
  utils: {
    linearGradient: (value: string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
    textGradient: (value: string) => ({
      background: value,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    }),
  },
});

const { theme: lightTheme } = createStitches({
  theme: {
    colors: {
      background: '#F3FAF8',
      mediumBackground: '#FFFFFF',
      mediumBackgroundHover: '#F9F9FB',
      card: '#FFFFFF',
      cardHover: '#F6F6F6',
      linearBackground:
        'linear-gradient(90deg,rgba(35,37,49,.5),rgba(15,15,24,.5));',
      gradient:
        'linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );',
      highlight145: 'linear-gradient(145deg, #8257e5, #c1b);',
      highlight30: 'linear-gradient(43deg, #8257e5, #2575fc);',
      text: '#363F5F',
    },
    space: {
      1: '0.4rem',
      2: '0.8rem',
      3: '1.2rem',
      4: '1.6rem',
      5: '2.0rem',
      6: '2.4rem',
      7: '3.0rem',
      8: '3.6rem',
      9: '4.4rem',
      10: '5.2rem',
    },
    fontSizes: {
      1: '0.8rem',
      2: '1rem',
      3: '1.2rem',
      4: '1.4rem',
      5: '1.6rem',
      6: '1.8rem',
      7: '2rem',
      8: '2.2rem',
      9: '2.5rem',
      10: '3rem',
    },
  },
});

export {
  darkTheme,
  lightTheme,
  styled,
  css,
  keyframes,
  globalCss,
  reset,
  getCssText,
};
