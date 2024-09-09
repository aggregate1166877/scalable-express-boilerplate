import { Router } from 'express';
import hello from '../controllers/hello.server.controller';
import auth from '../middlewares/authenticator';

const router = Router();

router.get('/hello', hello.usage);
router.get('/hello/message', auth.authenticate, hello.getMessage);
router.post('/hello/message', auth.authenticate, hello.postMessage);
router.put('/hello/message', auth.authenticate, hello.putMessage);
router.patch('/hello/message', auth.authenticate, hello.patchMessage);
router.delete('/hello/message', auth.authenticate, hello.deleteMessage);

export default router;
