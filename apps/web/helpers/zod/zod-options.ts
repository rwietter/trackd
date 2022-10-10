import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps } from 'react-hook-form';

export const zodOptions = (resolver: any): Partial<UseFormProps> => ({
  resolver: zodResolver(resolver),
  reValidateMode: 'onBlur',
  mode: 'onBlur',
  context: undefined,
  criteriaMode: 'firstError',
  shouldFocusError: true,
  shouldUnregister: false,
  delayError: undefined,
});
