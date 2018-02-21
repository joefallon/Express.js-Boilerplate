import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import cookieParser = require('cookie-parser');
import cookieSession = require('cookie-session');
// import timeout = require('connect-timeout');
import { Request, Response, NextFunction } from 'express-serve-static-core';
import timeout = require('connect-timeout')

import config = require('./config/main_config');

const app: express.Express = express();

// app.use(timeout(1));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(function (req: Request, res: Response, next: NextFunction) {
//     res.set(1);
//     next();
// });

// body parser setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(haltOnTimedout);
app.use(cookieParser('keyboard cat'));
app.use(cookieSession({
    name: 'session',
    keys: ['keyboard cat'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
// app.use(haltOnTimedout);

// use the proxy's (i.e. nginx) IP address.
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);

// Error Handlers
if(app.get('env') == 'development') {
    // Extra console request logging.
    app.use(function(req: Request, res: Response, next: NextFunction) {
        console.log();
        console.log('Request Body:');
        console.log(req.body);
        console.log('Request Query:');
        console.log(req.query);
        next();
    });

    // Development Error Handler - stack traces will be printed
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(err['status'] || 500);
        // res.render('error', { message: err.message, error: err });
        res.json({'errors': {message: err.message, error: err}});
    });
}
else {
    // Production Error Handler - stack traces will NOT be printed
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(err['status'] || 500);
        return;
    });
}

app.use(require('./routes/index'));
//
// function haltOnTimedout (req, res, next) {
//     if(!req.timedout) {
//         next();
//     }
//     else
//     {
//         console.log('timed out...');
//     }
// }

// Catch 404 and forward to error handler
app.use((req:Request, res:Response, next:NextFunction) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

// app.set('timeout', 1);
app.use(timeout(1));

function haltOnTimedout(req, res, next){
    if (!req.timedout) next();
}

app.listen(config.port, '127.0.0.1');
console.log('App Environment: ' + app.get('env'));
console.log(`Listening on 127.0.0.1:${config.port}`);
