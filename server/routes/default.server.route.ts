import { Router, Request, Response } from 'express';
import {
  root,
  badRequest,
  methodNotAllowed,
} from '../controllers/default.server.controller';

const router = Router();

// Define routes
router.get('/', (req: Request, res: Response) => root(req, res));
router.get('*', (req: Request, res: Response) => badRequest(req, res));
router.post('*', (req: Request, res: Response) => badRequest(req, res));
router.put('*', (req: Request, res: Response) => badRequest(req, res));
router.patch('*', (req: Request, res: Response) => badRequest(req, res));
router.delete('*', (req: Request, res: Response) => badRequest(req, res));
router.all('*', (req: Request, res: Response) => methodNotAllowed(req, res));

export default router;
