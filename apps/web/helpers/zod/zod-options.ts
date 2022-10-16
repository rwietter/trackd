import { UseFormProps } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type ZodKeys = {
  [key: string]: string;
}

export const zodOptions = <T extends z.ZodType<ZodKeys>> (schema: T): Partial<UseFormProps> => ({
  resolver: zodResolver(schema),
  reValidateMode: 'onBlur',
  mode: 'onBlur',
  context: undefined,
  criteriaMode: 'firstError',
  shouldFocusError: true,
  shouldUnregister: false,
  delayError: undefined,
});
