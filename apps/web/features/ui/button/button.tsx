/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ children, type = 'button', size = 'sm', color = 'primary', ...props }) => {
  return (
    <S.Button
      type={type}
      size={size}
      bg={color}
      {...props}
    >
      {children}
    </S.Button>
  )
}

export { Button };