import {  CiEdit } from 'react-icons/ci';

import { Row } from 'antd';

import { styled } from "../ui/theme"

export const Wrapper = styled('main', {
  background: '$background',
  height: '100vh',
})

export const CoverImage = styled('img', {
  width: '100%',
  background: 'linear-gradient(50deg, #f9e2ab, #f5cecd)',
  height: '200px',
  objectFit: 'cover',
})

export const Container = styled('div', {
  maxWidth: '1000px',
  margin: '0 auto',
})

export const ProfileImage = styled('img', {
  borderRadius: '50%',
  marginLeft: '1.5rem',
  position: 'relative',
  top: '-3.5rem',
  width: '7rem',
  height: '7rem',
  background: 'linear-gradient(180deg, #f5cecd, #f9e2ab)',
  border: '3px solid $background',
})

export const ProfileContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '0 1.5rem',
  width: '100%',
  position: 'relative',
  top: '-2.3rem',
})


export const Name = styled('p', {
  fontSize: 'clamp(1.2rem, 1.5rem + 1vw, 1.8rem)',
  fontWeight: 600,
  margin: 0,
  color: '$text',
})

export const Username = styled('p', {
  fontSize: '1rem',
  fontWeight: 600,
  margin: 0,
  color: '$text',
  paddingTop: '0.2rem',
})

export const Description = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingTop: '0.5rem',
  flexWrap: 'wrap',
})

export const City = styled('span', {
  fontSize: '1rem',
  fontWeight: 600,
  color: '$text',
  paddingLeft: '0.5rem',
})

export const Work = styled('span', {
  fontSize: '1rem',
  fontWeight: 600,
  color: '$text',
  paddingLeft: '0.5rem',
})

export const Padding = styled('span', {
  margin: '0 1rem',
})

export const ProfileEdit = styled(Row, {
  width: '100%',
  justifyContent: 'space-between',
})

export const EditIcon = styled(CiEdit, {
  marginRight: '2rem',
  marginTop: '1rem',
  cursor: 'pointer',
  fill: '$text',
})

export const History = styled('div', {
  padding: '1.5rem 1.5rem 1rem 1.5rem',
})

export const HistoryTitle = styled('h1', {
  fontSize: '1.3rem',
  margin: 0,
  fontWeight: 'bold',
  color: '$text',
})

export const LastUpdated = styled('p', {
  fontSize: '0.9rem',
  fontFamily: 'Inter',
  paddingTop: '0.7rem',
  display: 'flex',
  alignItems: 'center',
  color: '$text',

  'span:last-child': {
    paddingLeft: '0.5rem',
    fontFamily: 'Inter',
  },
})