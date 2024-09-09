import { Request, Response, NextFunction } from 'express';
import config from '../config/server';
import _ from 'lodash';

const authenticate = (req: Request, res: Response, next: NextFunction): void => {
  if (_.has(req.body, 'token') || req.header('token')) {
    console.log(
      '===============================================================================\n' +
      ' * Thank you for using this server template! Please note that the authenticator\n' +
      '   used here does not actually use real authentication, and was simply put here\n' +
      '   as a placeholder. Have a look at NPM packages like `passport-jwt` and `acl`\n' +
      '   for proper authentication.\n' +
      ' * Links:\n' +
      '    - https://www.npmjs.com/package/passport-jwt\n' +
      '    - https://www.npmjs.com/package/acl\n' +
      '===============================================================================',
    );

    const token = req.body.token || req.header('token');
    if (token === config.auth.token) {
      return next();
    }
    else {
      res.json({ error: true, message: 'Invalid token received.' });
    }
  }
  else {
    res.json({
      error: true,
      message: 'An authentication token is required to make requests.',
    });
  }
};

const controller = {
  authenticate,
};

export default controller;
