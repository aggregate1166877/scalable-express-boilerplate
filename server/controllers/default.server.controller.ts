import { Request, Response } from 'express';
import config from '../config/server';

export const root = (req: Request, res: Response): void => {
  res.status(200).json({
    error: false,
    message: `${config.server.name} API server is up and awaiting requests.`,
  });
};

export const badRequest = (req: Request, res: Response): void => {
  res.status(400).json({ error: true, message: 'Bad request.' });
};

export const methodNotAllowed = (req: Request, res: Response): void => {
  res.status(405).json({ error: true, message: 'Method not allowed.' });
};
