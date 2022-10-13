import { UseFormProps } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

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
