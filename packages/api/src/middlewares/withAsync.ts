import { logger } from '../helpers/logger';
import type { RequestHandler, Request, Response, NextFunction } from 'express';

export const withAsync = (routeCallback: RequestHandler) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await routeCallback(req, res, next);
  } catch (error) {
    logger.error({ level: 'error', message: error });
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
