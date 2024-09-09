import { Request, Response } from 'express';

export const handleErrors = (err: any, _: Request, res: Response): void => {
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
