import {
  blackA, mauve, violet, green, red,
} from '@radix-ui/colors';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { keyframes, styled } from '../ui/theme';

export const Main = styled('main', {
  display: 'flex',
  backgroundColor: '$background',
  color: '$text',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

export const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  width: '15rem',
  padding: '10px',
  background: '$white',
  boxShadow: `0 2px 10px ${blackA.blackA4}`,
  borderRadius: '4px',

  '@bp0': {
    width: '20rem',
  },
  '@bp1': {
    width: '25rem',
  },
});

export const TabsList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderBottom: `1px solid ${mauve.mauve6}`,
});

export const TabsTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: '$white',
  padding: '0 20px',
  height: 45,
  flex: 1,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve11,
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 6 },
  '&:last-child': { borderTopRightRadius: 6 },
  '&:hover': { color: violet.violet11 },
  '&[data-state="active"]': {
    color: violet.violet11,
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
});

export const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  backgroundColor: '$white',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  outline: 'none',
});

export const Box = styled('div', {});
export const Flex = styled('div', { display: 'flex' });

export const Text = styled('div', {
  marginBottom: 20,
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5,
});

export const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  cursor: 'pointer',

  variants: {
    variant: {
      violet: {
        backgroundColor: 'white',
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        '&:hover': { backgroundColor: mauve.mauve3 },
        '&:focus': { boxShadow: '0 0 0 2px black' },
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        '&:hover': { backgroundColor: green.green5 },
        '&:focus': { boxShadow: `0 0 0 2px ${green.green7}` },
      },
    },
  },

  defaultVariants: {
    variant: 'violet',
  },
});

export const Fieldset = styled('fieldset', {
  all: 'unset',
  marginBottom: 15,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

export const Label = styled('label', {
  fontSize: '15px',
  lineHeight: 1,
  marginBottom: 10,
  color: '$text',
  display: 'block',
});

export const Input = styled('input', {
  all: 'unset',
  flex: '1 0 auto',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 15,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 35,
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
  '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active': {
    transition: 'background-color 5000s ease-in-out 0s',
    WebkitTextFillColor: violet.violet11,
  },

  variants: {
    handle: {
      error: {
        boxShadow: `0 0 0 2px ${red.red8}`,
      },
      success: {
        boxShadow: `0 0 0 2px ${green.green8}`,
      },
      default: {
        boxShadow: `0 0 0 1px ${violet.violet7}`,
      },
    },
  },
});

const transitionErrorAnimation = keyframes({
  from: { transform: 'translateY(0)' },
  to: { transform: 'translateY(0.5rem)', paddingBottom: '0.3rem' },
});

export const ErrorMessage = styled('p', {
  all: 'unset',
  fontSize: 14,
  lineHeight: 1,
  animation: `${transitionErrorAnimation} 0.3s ease forwards`,
  color: red.red11,
});
