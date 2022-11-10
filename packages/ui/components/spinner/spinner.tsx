import { HTMLAttributes } from 'react';

import { Loading } from './styles';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  size: 'small' | 'default' | 'large';
  center?: boolean;
}

const Spinner = ({ size, center, ...props }: IProps) => (
  <Loading size={size} />
);

export { Spinner };
