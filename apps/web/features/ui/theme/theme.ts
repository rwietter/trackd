/* eslint-disable import/no-extraneous-dependencies */
import { createStitches } from '@stitches/react';

const {
  theme: darkTheme,
  styled,
  keyframes,
  css,
  getCssText
} = createStitches({
  theme: {
    colors: {
      background: '#0c0c0e',
      mediumBackground: '#fff',
      gradient:
       'linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );',
      highlight145: 'linear-gradient(145deg, #8257e5, #c1b);',
      highlight30: 'linear-gradient(43deg, #74ebd5, #9face6);',
      gradientGreen: 'linear-gradient(135deg, #80ffea 0%, #8aff80 100%);',
      gradientYellow: 'linear-gradient(135deg, #ffff80 0%, #ff80bf 100%);',
      gray50: '#f5f7fa',
      gray100: '#27272B',
      gray200: '#1B1B1E',
      gray300: '#121214',
      gray400: '#0C0C0E',
      primary: '#74ebd5',
      input: '#e1e1e1',
      primaryHover: '#A6F2E4',
      secondary: '#8257e5',
      tertiary: '#eea3b4',
      separator: '#FFFFFF',
      tooltip: '#ff006e',
      buttonThumb: '#F4F4F6',
      white: '#F4F4F6',
      dark: '#0c0c0e',
      text: '#FFFFFF',
      green: '#17b978',
      danger: '#FF006E',
    },
    space: {},
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
    bp0: '(min-width: 320px)',
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
      background: '#F2F5FA',
      mediumBackground: '#141419',
      gradient:
        'linear-gradient(90deg, #ffbe0b, #fb5607, #ff006e, #8257e5, #3a86ff );',
      highlight145: 'linear-gradient(145deg, #8257e5, #c1b);',
      highlight30: 'linear-gradient(43deg, #8257e5, #2575fc);',
      gray50: '#121214',
      gray100: '#F4F4F6',
      gray200: '#E1E1E4',
      gray300: '#D7D7DB',
      gray400: '#C9C9CF',
      primary: '#3a86ff',
      input: '#e1e1e1',
      primaryHover: '#7AAEFF',
      secondary: '#8257e5',
      tertiary: '#b15cdd',
      separator: '#222',
      tooltip: '#8257e5',
      white: '#FFFFFF',
      dark: '#14121F',
      text: '#121214',
      green: '#17b978',
      danger: '#FF006E',
    },
    space: {},
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
    media: {
      bp0: '(min-width: 320px)',
      bp1: '(min-width: 480px)',
      bp2: '(min-width: 620px)',
      bp3: '(min-width: 720px)',
      bp4: '(min-width: 970px)',
      bp5: '(min-width: 1100px)',
    },
  },
});

export {
  darkTheme, lightTheme, styled, css, keyframes, getCssText
};
