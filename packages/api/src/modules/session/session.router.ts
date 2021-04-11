import { Router } from 'express';
import { withAsync } from '../../middlewares/withAsync';
import { sessionController } from './session.controller';

export const sessionRouter = Router();

sessionRouter.get('/me', withAsync(sessionController));
