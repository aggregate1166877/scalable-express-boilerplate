import _ from 'lodash';
import { Request, Response } from 'express';

const usage = (req: Request, res: Response): void => {
  res.json({
    'Available routes': {
      // ================================================================================ //
      '/hello': {
        'GET': {
          'Description': 'Displays usage.',
        },
      },
      // ================================================================================ //
      '/hello/message': {
        'GET': {
          'Description': 'Displays a message.',
          'Request header keys': {
            'token': 'your_token',
          },
        },
        'POST': {
          'Description': 'Receives a messages, and sends it to console.log.',
          'Request body': {
            'token': 'your_token',
          },
        },
        'PUT': {
          'Description': 'Receives a messages, and sends it to console.log.',
          'Request body': {
            'token': 'your_token',
          },
        },
        'PATCH': {
          'Description': 'Receives a messages, and sends it to console.log.',
          'Request body': {
            'token': 'your_token',
          },
        },
        'DELETE': {
          'Description': 'Returns the message \'Nothing to delete.\'.',
          'Request body': {
            'token': 'your_token',
          },
        },
      },
      // ================================================================================ //
    },
  });
};

const getMessage = (req: Request, res: Response): void => {
  if (_.has(req.body, 'describe')) {
    res.json({ 'token': 'your_token' });
    return;
  }
  res.json({ error: false, 'message': 'Hello, world!' });
};

const postMessage = (req: Request, res: Response): void => {
  if (_.has(req.body, 'describe')) {
    res.json({ 'token': 'your_token' });
    return;
  }
  if (_.has(req.body, 'token')) {
    console.log(` --> API server received: "${req.body.token}"`);
  }
  res.json({ error: false, 'message': 'Hello, world!' });
};

const putMessage = postMessage;

const patchMessage = postMessage;

const deleteMessage = (req: Request, res: Response): void => {
  if (_.has(req.body, 'describe')) {
    res.json({ 'token': 'your_token' });
    return;
  }
  res.json({ error: false, 'message': 'Nothing to delete.' });
};

const notYetImplemented = (req: Request, res: Response): void => {
  res.json({ error: true, 'message': 'Not yet implemented (by you).' });
};

const controller = {
  usage,
  getMessage,
  postMessage,
  putMessage,
  patchMessage,
  deleteMessage,
  notYetImplemented,
};

export default controller;