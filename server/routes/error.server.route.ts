/**
 * Catchall for uncaught errors.
 */

import { Request, Response, NextFunction } from 'express';
import { handleErrors } from '../controllers/error.server.controller';

// Handle uncaught errors.
export default (err: any, req: Request, res: Response, next: NextFunction): void => {
  handleErrors(err, req, res, next);
};
