import * as express from 'express';

const router:express.Router = express.Router();


router.use('/', require('./default'));
router.use('/test', require('./test'));

export = router;