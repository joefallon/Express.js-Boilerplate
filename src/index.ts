import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express-serve-static-core';
import cookieSession = require('cookie-session');
import helmet = require('helmet');

process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at:', p, 'reason:', reason);
    // send entire app down. Process manager will restart it
    process.exit(1);
});

import config = require('./config/main_config');

const app: express.Express = express();
app.use(helmet());
app.disable('x-powered-by');

// View Engine Setup - EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body Parser Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser(config.cookie_secret));
app.use(cookieSession({
    name: 'session',
    maxAge: 0,
    httpOnly: true,
    signed: true,
    secret: config.cookie_secret
}));

// use the proxy's (i.e. nginx) IP address
// https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', true);

// Error Handlers
if(app.get('env') == 'development') {

    // extra console request logging
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

// import the application routes
app.use(require('./routes/index'));

// catch 404 and forward to error handler
app.use((req:Request, res:Response, next:NextFunction) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

app.listen(config.port, config.listen_ip);
console.log(`App Environment: ${app.get('env')}`);
console.log(`Listening on ${config.listen_ip}:${config.port}`);
