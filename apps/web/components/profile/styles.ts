import Image from 'next/image';

import { st } from 'ui';

export const ProfileLayout = st('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '$fg',
  transition: '$transitonTheme, border 350ms ease 0s',
  width: '100%',
  maxWidth: '15rem',
  borderRadius: '8px',
  padding: '1rem .8rem',
  cursor: 'pointer',
});

export const ProfileContent = st('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ProfileName = st('h1', {
  all: 'unset',
  fontSize: '1.2rem',
  fontFamily: '$sans',
  fontWeight: 500,
  color: '$text',
  paddingLeft: '.7rem',
});

export const ProfileImage = st(Image, {
  borderRadius: '50%',
});
