import Image from 'next/image';

import { styled } from '@/features/ui/theme';

export const ProfileLayout = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5F8FE',
  width: '100%',
  maxWidth: '15rem',
  borderRadius: '8px',
  padding: '1rem 0.5rem',
});

export const ProfileName = styled('h1', {
  all: 'unset',
  fontSize: '1.4rem',
  paddingRight: '1.4rem',
  fontFamily: 'Prompt',
  fontWeight: 400,
  color: '#303778',
});

export const ProfileImage = styled(Image, {
  borderRadius: '50%',
});
