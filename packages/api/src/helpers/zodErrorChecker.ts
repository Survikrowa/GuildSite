import { ZodError } from 'zod/lib/src/ZodError';

export const hasErrors = (parseResult: parseResult) => {
  return 'errors' in parseResult;
};

type parseResult = {
  username?: string;
  password?: string;
  email?: string;
  errors?: ZodError;
};
