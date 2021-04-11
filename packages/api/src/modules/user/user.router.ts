import { Router } from 'express';
import { withAsync } from '../../middlewares/withAsync';
import {
  userRegisterController,
  localPassportController,
  userLogoutController,
  codeValidationController,
} from './user.controller';

export const userRouter = Router();

userRouter.post('/', withAsync(userRegisterController));
userRouter.post('/login', withAsync(localPassportController));
userRouter.post('/logout', withAsync(userLogoutController));
userRouter.post('/activationCode/:activationCode', withAsync(codeValidationController));
