import { z } from 'zod';

export const signupSchema = z
  .object({
    email: z.string().min(6).email(),
    password: z.string().min(8),
    name: z.string().min(2),
  })
  .required();
