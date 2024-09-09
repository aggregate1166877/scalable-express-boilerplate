import { Request, Response, NextFunction } from 'express';

export const handleErrors = (err: any, req: Request, res: Response, next: NextFunction): void => {
  if (err instanceof SyntaxError) {
    // Handle JSON errors
    res.status(400).json({ error: true, message: 'JSON syntax error.' });
  }
  else {
    // Generic error handler to prevent exceptions being sent to the client.
    console.error(err);
    res.status(500).json({ error: true, message: 'Internal server error.' });
  }
};
