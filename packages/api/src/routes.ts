import { Router } from 'express';
import { userRouter } from './modules/user/user.router';
import { guildApplicationRouter } from './modules/applications/applications.router';
import { sessionRouter } from './modules/session/session.router';

export const appRouter = Router();

appRouter.use('/users', userRouter);
appRouter.use('/applications', guildApplicationRouter);
appRouter.use('/session', sessionRouter);
