import { Router } from 'express';
import {
  getAllApplications,
  getGuildApplication,
  getSingleApplication,
  postGuildApplication,
  updateGuildApplicationStatus,
} from './applications.controller';
import { withAsync } from '../../middlewares/withAsync';

export const guildApplicationRouter = Router();

guildApplicationRouter.get('/', withAsync(getAllApplications));
guildApplicationRouter.get('/:userId', withAsync(getSingleApplication));
guildApplicationRouter.put('/:userId', withAsync(updateGuildApplicationStatus));
guildApplicationRouter.get('/me/application', withAsync(getGuildApplication));
guildApplicationRouter.post('/me/application', withAsync(postGuildApplication));
