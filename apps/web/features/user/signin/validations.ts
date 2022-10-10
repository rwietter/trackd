import { z } from 'zod';

export const signinSchema = z
  .object({
    email: z.string().min(6).email(),
    password: z.string().min(8),
  })
  .required();
