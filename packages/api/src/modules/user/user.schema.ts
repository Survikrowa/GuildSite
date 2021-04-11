import * as zod from 'zod';

export const registerSchema = zod.object({
  username: zod.string().min(8, { message: 'Username must be at least 8 chars long' }),
  password: zod.string().min(8, { message: 'Password must be at least 8 chars long' }),
  email: zod.string().email({ message: 'Invalid email address' }),
});

export const loginSchema = zod.object({
  username: zod.string().min(8, { message: 'Username must be at least 8 chars long' }),
  password: zod.string().min(8, { message: 'Password must be at least 8 chars long' }),
});
