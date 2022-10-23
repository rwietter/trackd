import { HTMLAttributes } from 'react';

import { Spin } from 'antd';

import { styled } from '@/features/ui/theme';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'default' | 'large';
  center: boolean;
}

const SpinnerCenter = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9999999,
});


const Spinner = ({ size, center, ...props }: IProps) => {
  return (
    <span>
      {center ? (
        <SpinnerCenter {...props}>
          <Spin size={size} />
        </SpinnerCenter>
      ) : <Spin size={size} />}
    </span>
  )
}

export { Spinner };