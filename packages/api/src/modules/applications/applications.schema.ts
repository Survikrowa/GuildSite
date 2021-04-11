import * as zod from 'zod';

export const guildApplicationSchema = zod.object({
  igName: zod.string().min(1, { message: 'Field is required' }),
  userDescription: zod.string().min(1, { message: 'Field is required' }),
  age: zod.string().min(1, { message: 'Field is required' }),
  mainAndAlts: zod.string().min(1, { message: 'Field is required' }),
  prevExp: zod.string().min(1, { message: 'Field is required' }),
  raidDays: zod.string().min(1, { message: 'Field is required' }),
  uiScreen: zod.string().min(1, { message: 'Field is required' }),
  whereDidUFindUs: zod.string().min(1, { message: 'Field is required' }),
  prefRaidLang: zod.string().min(1, { message: 'Field is required' }),
});
