import * as express from 'express';
import { Request, Response } from 'express';

const router:express.Router = express.Router();

router.all('/', async (req:Request, res:Response) => {

    console.log(req.session);

    req.session['page_views'] = (req.session['page_views'] || 0) + 1;
    req.session['user_id'] = Math.round((new Date()).getTime() / 1000);

    console.log('Cookies: ');
    console.log(req.cookies);
    console.log('Signed Cookies: ');
    console.log(req.signedCookies);

    // res.signedCookies['test_val'] = 123;
    // res.cookies['test_val'] = 'abc';

    // res.clearCookie('test_val1');
    // res.clearCookie('test_val2');


    let farFuture = new Date(new Date().getTime() + (1000*60*60*24*365*10)); // ~10y

    res.cookie('test_val_1', 'abc', {signed: false, expires: farFuture});
    res.cookie('test_val_2', '123', {signed: true, expires: farFuture});

    res.render('default', { title: 'Test App' });
});

export = router;