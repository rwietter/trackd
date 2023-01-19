import { Modal as AntdModal } from 'antd';

import { styled } from "@/features/ui/theme"

export const inputs = {
  border: 'none',
  color: '$dark',
  padding: '0.2rem 0.5rem',
  borderRadius: '4px',
  background: '$input !important',
}

export const CoverImage = styled('img', {
  width: '100%',
  background: 'linear-gradient(50deg, #f9e2ab, #f5cecd)',
  height: '150px',
  objectFit: 'cover',
})

export const Modal = styled(AntdModal, {
  background: '$background',
  '.ant-modal-close-x': {
    color: '$text',
  },
  '.ant-modal-content, .ant-modal-header': {
    borderRadius: '8px',
    background: '$background !important',
    border: 'none !important',
    '.ant-modal-title': {
      color: '$text',
    }
  },
  '.ant-modal-body': {
    padding: '0',
  },

  '.ant-modal-footer': {
    border: 'none !important',
  }
})

export const Form = styled('form', {
  background: '$background',
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
  padding: '0 1.8rem',
  paddingBottom: '1rem',
  width: '100%',
  position: 'relative',
  top: '-1.4rem',
})

export const Padding = styled('div', {
  margin: '0.35rem 0 ',
})

export const Name = styled('input', {
  fontSize: '1rem',
  fontWeight: 600,
  margin: 0,
  ...inputs,
})

export const Username = styled('input', {
  fontSize: '1rem',
  fontWeight: 600,
  margin: 0,
  ...inputs,
})

export const Description = styled('div', {
  margin: 0,
  width: '100%',
  paddingTop: '1rem',
})

export const Inforow = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  width: '100%',
})

export const City = styled('input', {
  paddingLeft: '0.3rem',
  width: '100%',
  fontSize: '1rem',
  fontWeight: 600,
  ...inputs,
})

export const Work = styled('input', {
  paddingLeft: '0.3rem',
  width: '100%',
  fontSize: '1rem',
  fontWeight: 600,
  ...inputs,
})