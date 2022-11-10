import { styled } from '@stitches/react';
import { Spin } from 'antd';

export const Loading = styled(Spin, {
  position: 'absolute !important',
  margin: '0 auto',
  right: 0,
  left: 0,
  top: '50%',
});
