import * as express from 'express';
import { Request, Response } from 'express';

const router:express.Router = express.Router();

router.all('/', async (req:Request, res:Response) => {
    res.send('hello from /test');
});

export = router;