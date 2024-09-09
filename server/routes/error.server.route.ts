/**
 * Catchall for uncaught errors.
 */

import { Request, Response } from 'express';
import { handleErrors } from '../controllers/error.server.controller';

// Handle uncaught errors.
export default (err: any, req: Request, res: Response): void => {
  handleErrors(err, req, res);
};
