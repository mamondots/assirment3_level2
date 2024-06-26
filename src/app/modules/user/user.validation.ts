import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  role: z.enum(['admin', 'user']),
  address: z.string(),
});

export default userValidationSchema;
